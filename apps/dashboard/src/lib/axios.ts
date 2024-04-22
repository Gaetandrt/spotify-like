import axios from 'axios';
import { ApiResponse, SuccessResponse, ErrorResponse } from './api-response';

const axiosAPI = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

function handleResponse<T>(response: any): SuccessResponse<T> {
  return {
    status: "success",
    statusCode: response.status,
    data: response.data.data,
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

export async function fetcher<T>(url: string, method: 'get' | 'post' | 'put' | 'delete' | 'patch', data?: any): Promise<ApiResponse<T>> {
  const config = {
    method: method,
    url: url,
    data: data,
  };

  return axiosAPI(config)
    .then(response => handleResponse<T>(response))
    .catch(error => handleError(error));
}
export default axiosAPI;