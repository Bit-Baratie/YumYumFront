import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { AxiosInstance } from "axios";

interface patchReviewType {
  content: string;
  grade: number;
  memberId: number;
}

interface PostReview {
  storeId: number;
  content: string;
  grade: number;
  memberId: number;
}

const ReviewApi = () => {
  const axiosWithAuth: AxiosInstance = useAxiosWithAuth();

  const getReviewAll = async () => {
    const result = await axiosWithAuth.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/review`)
  
    return result;
  }
  
  const getReviewOne = async (reviewId:number) => {
    const result = await axiosWithAuth.get(`/review/${reviewId}`)
  
    return result;
  }
  
  const postReview = async (postReviewData: PostReview) => {
    const result = await axiosWithAuth.post(`${process.env.NEXT_PUBLIC_SERVER_IP}/review`, postReviewData)
  
    return result;
  }
  
  const patchReview = async (reviewId: number , patchReviewData: patchReviewType) => {
    const result = await axiosWithAuth.patch(`${process.env.NEXT_PUBLIC_SERVER_IP}/review/${reviewId}`, patchReviewData)
  }
  
  const deleteReview = async (reviewId: number) => {
    await axiosWithAuth.delete(`${process.env.NEXT_PUBLIC_SERVER_IP}/review/${reviewId}`)
  }

  return {
    getReviewAll,
    getReviewOne,
    postReview,
    patchReview,
    deleteReview
  }
}

export default ReviewApi;
