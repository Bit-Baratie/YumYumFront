import Naver from '@/public/asset/image/naver.svg';

export const NaverLogin = () => {
  const NAVER_AUTH_URL = `http://192.168.0.20:3000/oauth2/authorization/naver`;

  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <Naver onClick={naverLogin}/>
  );
}

export const Kakao = () => {
  return (
    <div>카카오 로고</div>
  );
}

export const Google = () => {
  return (
    <div>구글 로고</div>
  );
}