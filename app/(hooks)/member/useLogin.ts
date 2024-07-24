'use client'
import { useState } from "react"
import {postLoginInfo, postLogout} from "../../(api)/member/loginApi";
import { usePathname, useRouter } from "next/navigation";
import userStore from "@/app/(hooks)/userStore";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { loginType } from "@/app/type";

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const { userInfo, token, setToken, setUserInfo, deleteUserInfo, deleteToken } = userStore();
  const [success, setSuccess] = useState(false);
  const login = useMutation({
    mutationFn: (loginInfo: loginType) => postLoginInfo(loginInfo),
    onSuccess: (res) => {
      setUserInfo({
        memberId: res.data.memberId,
        nickName: res.data.nickname,
        imageUrl: res.data.imageUrl,
        phoneNumber: res.data.phoneNumber,
        role: res.data.role
      });
      setToken({
        atk: res.headers['authorization']
      });

      Swal.fire({
        title: '로그인 성공',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        width: 400,
      });
      setSuccess(true);
    },
    onError: () => {
      Swal.fire({
        title: '로그인 실패',
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
        width: 400,
      });
    }
  })

  const emailHanler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const passwordHanler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password,
    }

    login.mutate(info);
  }

  const logout = () => {
    postLogout();
    deleteUserInfo();
    deleteToken();

    Swal.fire({
      title: '로그아웃 되었습니다',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      width: 400,
    });

    if (pathname === '/home') {
      router.refresh();
    } else {
      router.push('/');
    }
  }

  return {
    email, password,
    emailHanler, passwordHanler,
    loginHandler, logout,
    userInfo,
    success
  }
}

export default useLogin;