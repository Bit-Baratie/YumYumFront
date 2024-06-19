'use client'
import { useState } from "react"
import { postLoginInfo } from "../(api)/loginApi";
import { redirect, useRouter } from "next/navigation";

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

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
      router.push('/');
    } else {
      alert(res.message);
    }
  }

  return {
    email, password,
    emailHanler, passwordHanler,
    login
  }
}

export default useLogin;