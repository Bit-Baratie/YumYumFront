import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { postMemberType } from "@/app/type";

export const postSignupInfo = async (signupInfo: postMemberType) => {
  const {axiosNonAuth} = useAxiosWithAuth();
  const result = await axiosNonAuth.post('/member', signupInfo);

  return result;
}