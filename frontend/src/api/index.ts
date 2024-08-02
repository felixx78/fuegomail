import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:3000" });

const storedUser = localStorage.getItem("user");
const user = storedUser && (JSON.parse(storedUser) as { token: string });

apiClient.interceptors.request.use((config) => {
  const token = user ? user.token : null;
  if (token) {
    //@ts-ignore
    config.headers = { ...config.headers, Authorization: token };
  }
  return config;
});
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await get("/auth/refresh");
        const { user: oldUser, token: _token } = user as any;
        localStorage.setItem(
          "user",
          JSON.stringify({ user: oldUser, token: newToken }),
        );
        originalRequest.headers["Authorization"] = newToken;
        return apiClient(originalRequest);
      } catch (e) {
        localStorage.removeItem("user");
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  },
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
