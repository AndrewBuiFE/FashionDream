import axiosClient from './axiosClient';
// import axios from 'axios';
import {AppConfig, HostName} from '../../general/constants/Global';
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
  getProductByCate: cateId => {
    const url = `${HostName}/api/v1/products/cate-search?cateId=${cateId}`;
    return axiosClient.get(url);
  },
  addProduct: params => {
    const url = `${HostName}/api/admin/auth/v1/products`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.post(url, params, config);
  },
  updateProduct: (params, productId) => {
    const url = `${HostName}/api/admin/auth/v1/products/${productId}`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.put(url, params, config);
  },
  deleteProduct: productId => {
    const url = `${HostName}/api/admin/auth/v1/products/${productId}`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.delete(url, config);
  },
  addCategory: params => {
    const url = `${HostName}/api/admin/auth/v1/categories`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.post(url, params, config);
  },
  getCategory: () => {
    const url = `${HostName}/api/v1/categories`;
    return axiosClient.get(url);
  },
  addToCart: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.post(url, params, config);
  },
  deleteFromCart: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.delete(url, params, config);
  },
  getCartProduct: params => {
    const url = `${HostName}/api/user/auth/v1/carts`;
    const config = {
      headers: {Authorization: `Bearer ${AppConfig.token}`},
    };
    return axiosClient.get(url, config);
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
