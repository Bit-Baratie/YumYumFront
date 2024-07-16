import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import axios from "axios";

export const postSignupInfo = async (signupInfo: FormData) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  console.log(signupInfo);
  const result = await axiosNonAuth.post('/member',
    signupInfo,
    {
      headers:{
        "Content-Type": 'multipart/form-data'
      }
    }).catch((err: { message: any; }) => {
      alert(err.message);
    });

  return result;
}