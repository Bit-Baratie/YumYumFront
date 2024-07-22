import {axiosNonAuth} from "@/app/(hooks)/common/axiosWithAuth";
import { loginType } from "@/app/type";

const postLoginInfo = async (loginInfo: loginType) => {
  const result = await axiosNonAuth.post(`/member/login`, loginInfo)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    alert('이메일 혹은 비밀번호를 확인해주세요');
  });

  return result;
}

export default postLoginInfo;