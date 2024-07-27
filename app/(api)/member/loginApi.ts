import {axiosNonAuth, axiosWithAuth} from "@/app/(hooks)/common/axiosWithAuth";
import { loginType } from "@/app/type";
// import axios from "axios";
// import Store from '@/app/(hooks)/userStore';

export const postLoginInfo = async (loginInfo: loginType) => {
  const result = await axiosNonAuth.post(`/auth/login`, loginInfo)

  return result;
}

export const postLogout = async () => {
  await axiosWithAuth.post(`/auth/logout`);
}

// export const refreshToken = async () => {
//   const refreshAxios = axios.create({
//     withCredentials: true
//   })
  
//   await refreshAxios.post('http://192.168.0.20:3000/auth/reissue')
//   .then((res) => {
//     Store.setState({token:{atk: res.headers['athorization']}})
//   });
// }