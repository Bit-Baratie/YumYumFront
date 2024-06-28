import Naver from '@/public/asset/image/naver.svg';

export const NaverLogin = () => {
  const NAVER_CLIENT_ID = '5Xxn8DYEG64BCrrG25xx'; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000"; // Callback URL
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

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