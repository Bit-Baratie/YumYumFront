import axios from "axios"
import useAxiosWithAuth from '@/app/(hooks)/common/useAxiosWithAuth';
const { axiosWithAuth, axiosNonAuth } = useAxiosWithAuth();

interface store {
  storeId: number;
  name: string;
  address: string;
  totalFavoriteCount: number;
  totalReviewCount: number;
  imageUrl: string;
  views: number;
  hashtags: hashtagListType[];
  categoryName: string,
  avgGrade: number;
  favoriteStatus: boolean;
}
interface hashtagListType {
  id: number,
  content: string
}


export const search = async (keyword: string | null) => {
  console.log(keyword);
  const result: store[] = await axiosWithAuth.get(`/store/search/${keyword}`)
  console.log("Api 통신 결과 : " + result);
  return result;
}

export const top10Search = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/top10?local=${local}`)
    .then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err.message);
    });

  return result;
}

export const monthSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/month?local=${local}`)
    .then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err.message);
    });

  return result;
}

export const starSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/star?local=${local}`)
    .then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err.message);
    });

  return result;
}

export const viewsSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/views?local=${local}`)
    .then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err.message);
    });

  return result;
}