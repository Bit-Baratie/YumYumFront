import {axiosNonAuth, axiosWithAuth} from "@/app/(hooks)/common/axiosWithAuth";
import { loginType } from "@/app/type";

export const postLoginInfo = async (loginInfo: loginType) => {
  const result = await axiosNonAuth.post(`/auth/login`, loginInfo)

  return result;
}

export const postLogout = async () => {
  await axiosWithAuth.post(`/auth/logout`);
}