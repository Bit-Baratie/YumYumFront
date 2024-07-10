'use client'
import { useState } from "react"
import  postLoginInfo  from "../../(api)/member/loginApi";
import { useParams, usePathname, useRouter } from "next/navigation";
import userStore from "@/app/(hooks)/userStore";

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const {userInfo, setToken, setUserInfo, deleteUserInfo, deleteToken} = userStore();

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
    console.log(res)
    if (res.atk) {
      setUserInfo({
        memberId: res.memberId,
        nickName: res.nickName,
        profileUrl: "/",
        phoneNumber: res.phoneNumber
      });
      setToken({
        atk: res.atk,
        rtk: res.rtk
      })
      router.push('/');
    } else {
      alert('이메일 또는 비밀번호를 확인해주세요');
    }
  }

  const logout = () => {
    deleteUserInfo();
    deleteToken();
    if (pathname === '/home') {
      router.refresh();
    } else {
      router.push('/');
    }
  }

  return {
    email, password,
    emailHanler, passwordHanler,
    login, logout,
    userInfo
  }
}

export default useLogin;