import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';
import { redirect } from 'next/navigation';


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
    if (response.status === 401) {
      console.log('a')
      redirect('/member/login');
    } else {
      return response;
    }
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
    if (error.response.status === 401) {
      redirect('/member/login');
    }
  }
);