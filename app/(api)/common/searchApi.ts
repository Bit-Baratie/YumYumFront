import axios from "axios"
import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';
const { axiosWithAuth, axiosNonAuth } = useAxiosWithAuth();

export const search = async (keyword: string | null) => {
  const result = await axiosWithAuth.get(`/store/search/${keyword}`)
  console.log(result.data);
  return result.data;
}
