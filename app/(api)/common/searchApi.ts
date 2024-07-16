import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';

export const search = async (keyword: string | null) => {
  const { axiosWithAuth } = useAxiosWithAuth();
  // if (!keyword) return false;
  const result = await axiosWithAuth.get(`/search/${keyword}`);
  console.log(result);
  return result.data;
}
