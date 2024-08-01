import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:3000" });

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
