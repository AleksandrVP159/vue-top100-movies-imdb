import axios from "axios";
import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

interceptors(instance);

export default instance;
