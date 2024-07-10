import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';

export const search = async (keyword: string | null) => {
  const { axiosWithAuth } = useAxiosWithAuth();
  const result = await axiosWithAuth.get(`/store/search/${keyword}`);
  return result.data;
}
