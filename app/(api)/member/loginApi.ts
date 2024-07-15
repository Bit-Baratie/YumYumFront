import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { loginType } from "@/app/type";

const postLoginInfo = async (loginInfo: loginType) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  const result = await axiosNonAuth.post(`/member/login`, loginInfo);
  return result;
}

export default postLoginInfo;