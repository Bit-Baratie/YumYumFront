import axios from "axios"

interface info {
  email: string,
  password: string
}

export const postLoginInfo = async (loginInfo: info) => {
  const result = await axios.post(`/member/login`, loginInfo)

  return result;
}