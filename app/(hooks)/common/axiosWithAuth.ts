import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';

export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
  headers: {
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

export const axiosNonAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
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
      window.location.href = '/member/login';
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    }
  }
);

axiosNonAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/member/login';
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    }
  }
);