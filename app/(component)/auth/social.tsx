import Naver from '@/public/asset/image/naver.svg';

export const NaverLogin = () => {
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;

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