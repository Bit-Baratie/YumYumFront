import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import axios from "axios"

interface info {
  email: string,
  nickName: string,
  password: string,
  phoneNumber: string,
  imageUrl: string
}

export const postSignupInfo = async (signupInfo: info) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  const result = await axiosNonAuth.post('/member', signupInfo);

  return result;
}