import axiosClient from './axiosClient';
// import axios from 'axios';
import {HostName} from '../../general/constants/Global';
const commonApi = {
  register: params => {
    const url = `${HostName}/api/auth/register`;
    return axiosClient.post(url, params);
  },
  login: params => {
    const url = `${HostName}/api/v1/signin`;
    return axiosClient.post(url, params);
  },
  refreshToken: params => {
    const url = `${HostName}/api/v1/refreshtoken`;
    return axiosClient.post(url, params);
  },
  getProduct: params => {
    const url = `${HostName}/api/v1/products`;
    return axiosClient.get(url);
  },
  addProduct: params => {
    const url = `${HostName}/api/admin/auth/v1/products`;
    return axiosClient.post(url, params);
  },
  updateProduct: (params, productId) => {
    const url = `${HostName}/api/admin/auth/v1/products/${productId}`;
    return axiosClient.put(url, params);
  },
  addCategory: params => {
    const url = `${HostName}/api/admin/auth/v1/categories`;
    return axiosClient.post(url, params);
  },
  getCategory: params => {
    const url = `${HostName}/api/v1/categories`;
    return axiosClient.get(url);
  },
  addToCart: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    return axiosClient.post(url, params);
  },
  deleteFromCart: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    return axiosClient.delete(url, params);
  },
  getCartProduct: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    return axiosClient.get(url);
  },
  orderInfo: params => {
    const url = `${HostName}/api/user/auth/v1/checkout`;
    return axiosClient.get(url, params);
  },
  makeOrder: params => {
    const url = `${HostName}/api/user/auth/v1/checkout`;
    return axiosClient.post(url, params);
  },
};

export default commonApi;
