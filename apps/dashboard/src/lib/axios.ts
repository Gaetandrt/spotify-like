import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

export default axiosAPI;