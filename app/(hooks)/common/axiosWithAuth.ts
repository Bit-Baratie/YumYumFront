import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';

export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
  headers: {
    Authorization: `${Store.getState().token.atk}`,
    "Content-Type": 'application/json'
  },
  withCredentials: true
});

export const axiosNonAuth: AxiosInstance = axios.create({
  baseURL: 'https://api.baratie.site',
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
      console.log(error);
      // window.location.href = '/member/login';
    } else if (error.response.status === 403) {
      alert('권한이 없습니다');
      console.log(error);
      // window.location.href = '/';
    }
  }
);