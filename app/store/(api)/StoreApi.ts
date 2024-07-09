'use client';
import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';
import axios from "axios";
import Store from "@/app/(hooks)/userStore";

interface store {
  storeId: number,
  name: string,
  address: string,
  totalFavoriteCount: number,
  totalReviewCount: number,
  imageList: Image[],
  categoryName: string,
  views: number,
  imageUrl: string,
  hashtags: string[],
  favoriteStatus: boolean,
  avgGrade: number,
  hours: string,
  calls: string,
  menuList: menuListType[],
}
interface Image {
  imageUrl: string; // 이미지의 URL
}
interface menuListType {
  name: string,
  price: number
}
interface pageNumber {
  totalPages: number,
  currentPages: number
}

//나의 위도 경도
interface location {
  latitude: number,
  longitude: number,
}
interface data {
  favoriteStatus: boolean,
  storeId: number
}

export interface SearchResponse {
  totalPages: number;
  currentPage: number;
  //한 번에 표시할 결과의 수
  limit: number;
  data: store[];
}


const useStoreApi = () => {
  const { axiosWithAuth, axiosNonAuth } = useAxiosWithAuth();

  const getStoreInfo = async (location: location) => {
    const result = await axiosWithAuth.get(`/store?lng=${location.longitude}&&lat=${location.latitude}`)
    console.log(result)
    return result.data
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

    console.log(storeId)
    // const storeId = 1;
    const result = await axiosWithAuth.get(`/store/${storeId}`)
    return result.data
  };
  const postStar = async (data: data) => {
    const result = await axiosWithAuth.post("/star", data)
    console.log("요청 전송 완료" + data)
    return result.data
  }


  return {
    postStar,
    StoreDetailInfo,
    searchStoreInfo,
    getStoreInfo,
    postStoreLike,
  };
}

export default useStoreApi;
