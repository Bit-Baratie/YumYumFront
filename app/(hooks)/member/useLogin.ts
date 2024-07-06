'use client'
import { useState } from "react"
import  postLoginInfo  from "../../(api)/member/loginApi";
import { useRouter } from "next/navigation";
import userStore from "@/app/(hooks)/userStore";

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const {userInfo, setUserInfo, deleteUserInfo} = userStore();

  const emailHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password,
    }

    const res:any = await postLoginInfo(info);
    if (res.atk) {
      setUserInfo(res);
      router.push('/');
    } else {
      alert(res.message);
    }
  }

  const logout = () => {
    deleteUserInfo();
    router.push('/');
  }

  return {
    email, password,
    emailHanler, passwordHanler,
    login, logout,
    userInfo
  }
}

export default useLogin;