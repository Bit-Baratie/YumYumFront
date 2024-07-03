'use client';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import userStore from '../userStore';

const useAxiosWithAuth = (): any => {
  const { userInfo } = userStore();
    
  const axiosWithAuth: AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.20:3000',
    headers: {Authorization: `Bearer ${userInfo.atk}`}
  });

  axiosWithAuth.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error.message);
    }
  );

  const axiosNonAuth: AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.20:3000'
  });

  axiosNonAuth.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error.message);
    }
  );

  return {axiosWithAuth, axiosNonAuth};
};

export default useAxiosWithAuth;