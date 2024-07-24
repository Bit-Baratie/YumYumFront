import Naver from '@/public/asset/image/naver.svg';
import Kakao from '@/public/asset/image/Kakao.svg';

export const NaverLogin = () => {
  const NAVER_AUTH_URL = `http://223.130.158.171:80/oauth2/authorization/naver`;

  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <Naver onClick={naverLogin}/>
  );
}

export const KakaoLogin = () => {
  const NAVER_AUTH_URL = `http://192.168.0.20:3000/oauth2/authorization/kakao`;

  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <Kakao onClick={naverLogin}/>
  );
}

export const Google = () => {
  return (
    <div>구글 로고</div>
  );
}