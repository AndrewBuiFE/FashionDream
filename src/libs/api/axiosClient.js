// api/axiosClient.js
import axios from 'axios';

// Cai dat config mac dinh cho http request
// Tham khao: `https://github.com/axios/axios#request-config`
// de xem chi tiet
const axiosClient = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://192.168.100.181:8000',
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async config => {
  console.log("config", config);
  console.log(
    config.url,
    config.method,
    config.method === 'post' ? config.data : '',
  );
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    console.log("Response: ", response);
    // if (response && response.data) {
    //   return response.data;
    // }

    return response;
  },
  error => {
    // Bat loi xay ra
    console.log(`[axiosClient.js] ${error}`);
    throw error;
  },
);

export default axiosClient;
