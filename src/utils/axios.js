import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:9000",
});

export default axiosInstance;
