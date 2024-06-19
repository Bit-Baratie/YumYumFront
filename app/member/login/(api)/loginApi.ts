import axios from "axios"

interface info {
  email: string,
  password: string
}

export const postLoginInfo = async (loginInfo: info) => {
  console.log(loginInfo);
  const result = await axios.post('http://localhost:3000', loginInfo)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해 주세요');
  });

  return result;
}