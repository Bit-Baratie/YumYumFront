import axios from "axios"

export const naverApi = async (code: string) => {
  const userInfo = await axios.post('naver로그인', code)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해주세요');
  });

  return userInfo;
}