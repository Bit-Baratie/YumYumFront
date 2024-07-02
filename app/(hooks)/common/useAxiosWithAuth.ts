'use client';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import userStore from '../userStore';

const useAxiosWithAuth = (): AxiosInstance => {
  const { userInfo } = userStore();
    
  const axiosWithAuth: AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.20:3000',
    headers: {Authorization: `Bearer ${userInfo.atk}`}
  });

  // axiosWithAuth.interceptors.request.use(
  //   (config) => {
  //     const token = userInfo.atk;
  //     if (token) {
  //       config.headers = config.headers || {};
  //       (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     console.error(error);
  //     return Promise.reject(error);
  //   }
  // );

  axiosWithAuth.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error.message);
    }
  );

  return axiosWithAuth;
};

export default useAxiosWithAuth;