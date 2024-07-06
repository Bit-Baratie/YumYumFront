'use client';
import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';
import axios from "axios";
import Store from "@/app/(hooks)/userStore";

interface store {
  storeId: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageList: Image[],
  categoryList: string[],
  views: number,
  imageUrl: string,
  hashtagList: hastagListType[],
  isFavorite: boolean,
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
interface member {
  memberId: number
}
interface LikeInfo {
  isFavorite: boolean
}
interface pageNumber {
  totalPages: number,
  currentPages: number
}
interface hastagListType {
  id: number,
  content: string
}
//나의 위도 경도
interface location {
  latitude: number,
  longitude: number,
}
interface data {
  isFavorite: boolean,
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
    // const result : Array<store> = await axios.get(`http://localhost:3000/store?long=${location.longitude}&&lat=${location.latitude}`)
    // .then((res) =>{
    //     return res.data;
    // }).catch((err) => {
    //     console.log(err);
    //     alert("다시 시도해주세요.");
    // });

    //store 정보
    return [{
      storeId: 1,
      name: "카넬로손파이",
      address: "강남대로 200-1",
      favoriteCount: 123,
      reviewCount: 123,
      imageUrl: "/",
      categoryList: ["123", "456", "789"],
      views: 12837,
      hashtagList: ["123", "456", "789"],
      isFavorite: false,
      avgGrade: 4.5,
      latitude: 36.5098556,
      longtitude: 127.2431966
    }
    ]
  }
  const postStoreLike = async (isFavorite: LikeInfo) => {
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
    const result = await axios.get(`http://192.168.0.20:3000/store/${storeId}`)
      .then((res) => {
        console.log(res.data);
        return res.data
      }).catch((err) => {
        alert("다시 한 번 시도하세요.")
        console.log(err);
      })
    return result;
  };
  const postStar = async (data: data) => {
    const result = await axiosWithAuth.post("/star", data)
    console.log("요청 전송 완료" + data)
    return result;
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
