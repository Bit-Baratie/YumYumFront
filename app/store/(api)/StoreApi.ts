import { axiosWithAuth } from '@/app/(hooks)/common/axiosWithAuth';
import axios from "axios";
import Store from "@/app/(hooks)/userStore";
import { getStoreType, location, favorite } from '@/app/type';




const useStoreApi = () => {

  const getStoreInfo = async (location: location) => {
    const result = await axiosWithAuth.get(`/search?lng=${location.longitude}&&lat=${location.latitude}`)
    return result?.data
  }

  const StoreDetailInfo = async (storeId: number) => {
    const result = await axiosWithAuth.get(`/store/${storeId}`)
    return result
  };
  const postStar = async (data: favorite) => {
    const result = await axiosWithAuth.post("/star", data)
    return result
  }

  const getStoreReview = async (storeId: number, { pageNumber }: { pageNumber: unknown }) => {
    const result = await axiosWithAuth.get(`/review/store/${storeId}?pageNumber=${pageNumber}`)
    return result.data
  }

  return {
    postStar,
    StoreDetailInfo,
    getStoreInfo,
    getStoreReview
  };
}

export default useStoreApi;
