'use client'
import loginStyle from '@/app/member/login/loginForm.module.scss';
import Logo from '@/public/asset/image/logo.svg';
import Link from 'next/link';
import useLogin from './(hooks)/useLogin';
import Naver from '@/public/asset/image/naver.svg';
import Google from '@/public/asset/image/Google.svg';
import Kakao from '@/public/asset/image/Kakao.svg';

const Login = () => {
  const {email, password, emailHanler, passwordHanler, login} = useLogin();

  return (
    <div className={loginStyle.container}>
      <Link href={'/'}><Logo/></Link>
      <span className={loginStyle.title}>L O G I N</span>
      <form className={loginStyle.form}>
        <input type="text" placeholder='이메일' value={email} onChange={(e) => emailHanler(e)}/>
        <input type="password" placeholder='비밀번호' value={password} onChange={(e) => passwordHanler(e)}/>
        <div className={loginStyle.text}>Don't have an account?</div>
        <Link href={'/member/signup'}><div className={loginStyle.link}>Sign up!</div></Link>
        <button onClick={(e) => login(e)}>LOGIN</button>
      </form>
      <span className={loginStyle.span}><hr className={loginStyle.hr}/>&nbsp; S N S &nbsp; L O G I N &nbsp;<hr className={loginStyle.hr}/></span>
      <span className={loginStyle.social}><Kakao/><Naver/><Google/></span>
    </div>
  );
}

export default Login;