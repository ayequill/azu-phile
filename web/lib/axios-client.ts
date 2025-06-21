import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.API_URL;
const BEARER_TOKEN = process.env.BEARER_TOKEN;

const axiosClient: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  if (BEARER_TOKEN && config.headers) {
    config.headers.Authorization = `Bearer ${BEARER_TOKEN}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error in API request:", error.response?.data);
    return Promise.reject(error);
  }
);

export default axiosClient;