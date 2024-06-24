'use client'
import { useState } from "react"
import { postLoginInfo } from "../(api)/loginApi";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import useUserInfo from "@/app/(hooks)/useUserInfo";

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const {userInfo, setUserInfo, deleteUserInfo} = useUserInfo();

  const emailHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const info = {
      email,
      password
    }

    const res = await postLoginInfo(info);
    if (res.status === 1) {
      // 멤버아이디와 토큰 저장 부분
      cookies().set('auth', res.token); // 브라우저 쿠키에 토큰저장
      setUserInfo(res.data);
      router.push('/');
    } else {
      alert(res.message);
    }
  }

  const logout = () => {
    cookies().delete('auth');
    router.push('/');
  }

  return {
    email, password,
    emailHanler, passwordHanler,
    login, logout
  }
}

export default useLogin;