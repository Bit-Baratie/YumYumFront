'use client';
import axios, { AxiosInstance } from 'axios';
import Store from '../userStore';
import { redirect } from 'next/navigation';


export const axiosWithAuth: AxiosInstance = axios.create({
  baseURL: 'https://223.130.158.171:443',
  headers: {
    Authorization: `Bearer ${Store.getState().token.atk}`,
    "Content-Type": 'application/json'
  }

});

export const axiosNonAuth: AxiosInstance = axios.create({
  baseURL: 'https://223.130.158.171:443'
});

axiosWithAuth.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
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
    console.error(error.message);
  }
);