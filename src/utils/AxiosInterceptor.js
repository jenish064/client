import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in'
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Interceptor:', config);
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
