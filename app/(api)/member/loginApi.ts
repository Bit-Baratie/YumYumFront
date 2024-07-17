import {axiosNonAuth} from "@/app/(hooks)/common/axiosWithAuth";
import { loginType } from "@/app/type";

const postLoginInfo = async (loginInfo: loginType) => {
  const result = await axiosNonAuth.post(`/member/login`, loginInfo);
  return result.data;
}

export default postLoginInfo;