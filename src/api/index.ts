import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://localhost:44303/api/",
};

export const mainAPI: AxiosInstance = axios.create(config);
