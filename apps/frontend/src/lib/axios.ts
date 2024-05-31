import axios, { AxiosRequestConfig, Method } from 'axios';
import { ApiResponse, SuccessResponse, ErrorResponse } from './api-response';
import { headers } from 'next/headers';

const axiosAPI = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

function handleResponse<T>(response: any): SuccessResponse<T> {
  return {
    status: "success",
    statusCode: response.status,
    data: response.data.data,
    metaData: response.data.metaData,
    path: response.config.url,
  };
}

function handleError(error: any): ErrorResponse {
  return {
    status: "error",
    statusCode: error.response?.status || 500,
    errorCode: error.response?.data?.errorCode || "UnknownError",
    details: error.response?.data?.details,
    path: error.config.url,
  };
}

export async function fetcher<T>(url: string, method: Method, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  const axiosConfig: AxiosRequestConfig = {
    method,
    url,
    ...config,
  };

  return axiosAPI(axiosConfig)
    .then(response => handleResponse<T>(response))
    .catch(error => handleError(error));
}
export default axiosAPI;