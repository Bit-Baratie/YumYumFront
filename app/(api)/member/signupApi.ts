import {axiosNonAuth} from "@/app/(hooks)/common/axiosWithAuth";
import axios from "axios";

export const postSignupInfo = async (signupInfo: FormData) => {
  const result = await axiosNonAuth.post('/auth',
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