import {axiosWithAuth} from '@/app/(hooks)/common/useAxiosWithAuth';
import axios from "axios";
import Store from "@/app/(hooks)/userStore";
import { getStoreType, location, favorite } from '@/app/type';




const useStoreApi = () => {
  const getStoreInfo = async (location: location) => {
    const result = await axiosWithAuth.get(`/search?lng=${location.longitude}&&lat=${location.latitude}`)
    return result?.data
  }
  const postStoreLike = async (isFavorite: boolean) => {
    // const result = await axios.post(`http://localhost:3000/star/${storeId}`,isFavorite)
    // .then((res) =>{
    //     return res.data;
    // }).catch((err) =>{
    //     console.log(err);
    //     alert("다시 시도해주세요.");
    // })

    return {
      isFavorite: false
    }
  }
  const searchStoreInfo = async (Page: number) => {
    // const result = await axios.get(`http://localhost:3000/store?keyword=${keyword}`)
    // .then((res) =>{
    //    return res.data
    // }).catch((err) =>{
    //    console.log(err);
    //    alert("다시 시도해주세요.");
    // })

    return [
      {
        storeId: 1,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: false,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      },
      {
        storeId: 2,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: true,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      }, {
        storeId: 3,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: false,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      },
      {
        storeId: 4,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: true,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      }, {
        storeId: 5,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: false,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      },
      {
        storeId: 6,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: true,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      }, {
        storeId: 7,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: false,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      },
      {
        storeId: 8,
        name: "카넬로손파이",
        address: "강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl: "/",
        categoryList: ["123", "456", "789"],
        views: 12837,
        hashTagList: ["123", "456", "789"],
        isFavorite: true,
        grade: 4.5,
        totalPage: 10,
        currentPage: 1
      }
    ]
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
    searchStoreInfo,
    getStoreInfo,
    postStoreLike,
    getStoreReview
  };
}

export default useStoreApi;
