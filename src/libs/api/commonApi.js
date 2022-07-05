import axiosClient from './axiosClient';
import axios from 'axios';
import {HostName} from '../../general/constants/Global';
const commonApi = {
  getProduct: params => {
    const url = 'http://20.247.114.145:8099/api/v1/products/';
    return axiosClient.get(url, params);
  },
  register: params => {
    const url = `${HostName}/api/auth/register`;
    return axiosClient.post(url, params);
  },
  login: params => {
    const url = `${HostName}/api/auth/login`;
    return axiosClient.post(url, params);
  },
  getUser: () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzI0ZGFhYjFmYjRiZTc2NTdiMjQ5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjkyOTkyNCwiZXhwIjoxNjU3MTAyNzI0fQ.UUXKMkySb9nxnoEnHzEulD1kEEr0Igeya0yfDtBp0U0';
    const config = {
      headers: {token: `Bearer ${token}`},
    };
    const url = `${HostName}/api/users/find/62c24daab1fb4be7657b249c`;
    return axiosClient.get(url, config);
  },
};

export default commonApi;
