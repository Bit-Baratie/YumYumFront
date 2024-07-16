'use client'
import { useCallback, useRef, useState } from "react";
import { postSignupInfo } from "../../(api)/member/signupApi";
import { useRouter } from "next/navigation";

const useSignup = () => {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [image, setImage] = useState<string>('/asset/image/defaultImage.png');
  const [file, setFile] = useState<any>();
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
    setFile(file);
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

  const signup = useCallback (async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const info = {
      email: email,
      password: password,
      nickName: nickname,
      phoneNumber: phone
    };

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const upload = JSON.stringify(info);
    formData.append('signUpDto', new Blob([upload], {type: 'application/json'}));

    const res = await postSignupInfo(formData);
    if (res.status === 201) {
      router.push('/member/login');
    } else {
      alert('회원가입 실패');
    }
    
  }, [])

  return {
    email, password, passwordCheck, nickname, phone, image, fileInput,
    emailHanler, passwordHanler, passwordCheckHanler, nicknameHanler, phoneHanler, imageHanler,
    signup
  };
}

export default useSignup;