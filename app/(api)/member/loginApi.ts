import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth"

interface info {
  email: string,
  password: string
}

const postLoginInfo = async (loginInfo: info) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  const result = await axiosNonAuth.post(`/member/login`, loginInfo)

  return result.data;
}

export default postLoginInfo;