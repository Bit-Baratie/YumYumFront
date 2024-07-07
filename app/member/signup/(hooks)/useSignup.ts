'use client'
import { useRef, useState } from "react";
import { postSignupInfo } from "../(api)/signupApi";
import { useRouter } from "next/navigation";

const useSignup = () => {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [image, setImage] = useState<string>('/asset/image/defaultImage.png');
  const fileInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const emailHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const nicknameHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }

  const passwordHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const passwordCheckHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  }

  const phoneHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }

  const imageHanler = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    
    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
    	if(reader.readyState === 2) {
        	// 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
          	setImage(e.target.result);
        }
    }
  }

  const signup = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const info = {
      email, password, nickname, phone, image
    };

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const res = await postSignupInfo(info);
    if (res.status === 1) {
      alert(res.message);
      router.push('/home');
    } else {
      alert(res.message);
    }    
  }

  return {
    email, password, passwordCheck, nickname, phone, image, fileInput,
    emailHanler, passwordHanler, passwordCheckHanler, nicknameHanler, phoneHanler, imageHanler,
    signup
  };
}

export default useSignup;