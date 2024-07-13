'use client';
import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';

const useAxiosWithAuth = (): any => {
  const axiosWithAuth: AxiosInstance = axios.create({
    baseURL: 'http://223.130.158.171:80',
    headers: {
      Authorization: `Bearer ${Store.getState().token.atk}`,
      "Content-Type": 'application/json'
    }
 
  });

  const axiosNonAuth: AxiosInstance = axios.create({
    baseURL: 'http://223.130.158.171:80'
  });

  axiosWithAuth.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error(error.message);
    }
  );

  axiosNonAuth.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error(error.message);
    }
  );

  return {axiosWithAuth, axiosNonAuth};
};

export default useAxiosWithAuth;