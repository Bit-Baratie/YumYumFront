import axios from "axios"

export const naverApi = async (code: string|null) => {
  const userInfo = await axios.get(`http://192.168.0.20:3000/login/oauth2/code/naver?code=${code}`)
  .then((res) => {
    console.log(res);
    return res.data;
  })
  .catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해주세요');
  });

  return userInfo;
}