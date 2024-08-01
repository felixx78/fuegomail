import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:3000" });

apiClient.interceptors.response.use((response) => response.data);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
