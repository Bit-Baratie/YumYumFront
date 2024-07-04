import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';

const HomeApi = () => {
  const {axiosNonAuth} = useAxiosWithAuth();

  const getTop10 = (local: string) => {
    const result = axiosNonAuth.get(`/store/top10?local=${local}`)
    return result;
  }

  const getMonth = (local: string) => {
    const result = axiosNonAuth.get(`/store/month?${local}`)
    return result;
  }

  const getStar = (local: string) => {
    const result = axiosNonAuth.get(`/store/star?${local}`)
    return result;
  }

  const getViews = (local: string) => {
    const result = axiosNonAuth.get(`/store/views?${local}`)
    return result;
  }

  return {
    getTop10, getMonth, getStar, getViews
  };
}

export default HomeApi;