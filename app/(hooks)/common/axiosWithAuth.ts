import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';

export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: 'http://223.130.158.171:80',
  headers: {
    Authorization: `${Store.getState().token.atk}`,
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

export const axiosNonAuth: AxiosInstance = axios.create({
  baseURL: 'http://223.130.158.171:80',
  headers: {
    Authorization: `${Store.getState().token.atk}`,
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

axiosWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert('로그인이 필요합니다')
      window.location.href = '/member/login';
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

axiosNonAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert('로그인이 필요합니다')
      window.location.href = '/member/login';
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);