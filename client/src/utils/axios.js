import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const axiosInstance = axios.create({
    baseURL : `${BASE_URL}/api`,
    withCredentials : true,
});

export default axiosInstance;