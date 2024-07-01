import axios from "axios"

interface info {
  email: string,
  password: string
}

export const postLoginInfo = async (loginInfo: info) => {
  const result = await axios.post('http://192.168.0.20:3000', loginInfo)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해 주세요');
  });

  return result;
}