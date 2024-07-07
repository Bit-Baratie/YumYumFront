'use client'
import Logo from '@/public/asset/image/logo.svg';
import signupStyle from '@/app/member/signup/signupForm.module.scss';
import useSignup from './(hooks)/useSignup';
import Link from 'next/link';
const Signup = () => {
  const {email, password, passwordCheck, nickname, phone, image, fileInput,
    emailHanler, passwordHanler, passwordCheckHanler, nicknameHanler, phoneHanler, imageHanler,
    signup} = useSignup();

  return (
    <div className={signupStyle.container}>
      <Link href={'/'}><Logo/></Link>
      <span className={signupStyle.title}>S I G N U P</span>
      <form className={signupStyle.form}>
        <input type="text" placeholder='닉네임' value={nickname} onChange={(e) => nicknameHanler(e)}/>
        <input type="text" placeholder='이메일' value={email} onChange={(e) => emailHanler(e)}/>
        <input type="password" placeholder='비밀번호' value={password} onChange={(e) => passwordHanler(e)}/>
        <input type="password" placeholder='비밀번호 확인' value={passwordCheck} onChange={(e) => passwordCheckHanler(e)}/>
        <input type="text" placeholder='연락처' value={phone} onChange={(e) => phoneHanler(e)}/>
        <div>
          <img src={image} alt="프로필 이미지" />
          <label htmlFor="input-file" >Profile Image</label>
          <input type="file" id='input-file' placeholder='Profile Image' ref={fileInput} onChange={(e) => imageHanler(e)} />
        </div>
        <button onClick={(e) => signup(e)}>SIGN UP</button>
      </form>
    </div>
  );
}

export default Signup;