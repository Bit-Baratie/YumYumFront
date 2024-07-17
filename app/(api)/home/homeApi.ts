import {axiosNonAuth} from '@/app/(hooks)/common/useAxiosWithAuth';

const HomeApi = () => {
  const getTop10 = async (local: string) => {
    const result = await axiosNonAuth.get(`/top10?local=${local}`);
    return result.data;
  }

  const getMonth = async (local: string) => {
    const result = await axiosNonAuth.get(`/top10/month?local=${local}`);
    return result.data;
  }

  const getStar = async (local: string) => {
    const result = await axiosNonAuth.get(`/top10/favorite?local=${local}`);
    return result.data;
  }

  const getViews = async (local: string) => {
    const result = await axiosNonAuth.get(`/top10/views?local=${local}`);
    return result.data;
  }

  return {
    getTop10, getMonth, getStar, getViews
  }
}

export default HomeApi;