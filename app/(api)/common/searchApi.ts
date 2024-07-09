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
  const result = await axiosWithAuth.get(`/store/search/${keyword}`)
  console.log(result.data);
  return result.data;
}
