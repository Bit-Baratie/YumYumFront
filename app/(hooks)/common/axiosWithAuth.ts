import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';
// import { refreshToken } from '@/app/(api)/member/loginApi';

export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
  // baseURL: 'http://192.168.0.20:3000',
  headers: {
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

export const axiosNonAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
  // baseURL: 'http://192.168.0.20:3000',
  headers: {
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

axiosWithAuth.interceptors.request.use((config) => {
  const token = Store.getState().token.atk;
  if (token) {
    config.headers.Authorization = `${token}`;
  } else {
    return Promise.reject(new Error('토큰이 없습니다.'));
  }
  return config;
});

axiosNonAuth.interceptors.request.use((config) => {
  const token = Store.getState().token.atk;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // window.location.href = '/member/login';
      console.log(error);
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    } else if (error.response.status === 419) {
      // refreshToken();
    }
  }
);

axiosNonAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // window.location.href = '/member/login';
      console.log(error);
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    } else if (error.response.status === 419) {
      // refreshToken();
    }
  }
);