import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import axios from "axios";

export const postSignupInfo = async (signupInfo: FormData) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  console.log(signupInfo);
  const result = await axios.post('http://192.168.0.20:3000/member',
    signupInfo,
    {
      headers:{
        "Content-Type": 'multipart/form-data'
      }
    });

  return result;
}