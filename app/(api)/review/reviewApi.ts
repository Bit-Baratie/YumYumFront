import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { patchReviewType, postReviewType, likeReviewType, reportType } from "@/app/type";

const ReviewApi = () => {
  const {axiosWithAuth, axiosNonAuth} = useAxiosWithAuth();

  const getReviewOne = async (reviewId: number) => {
    const result = await axiosNonAuth.get(`/review/${reviewId}`);
    return result.data;
  }

  const postReview = async ({postReviewData}: {postReviewData: postReviewType}) => {
    const result = await axiosWithAuth.post(`/review`, postReviewData)
    return result.data;
  }

  const getReviewAll = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosNonAuth.get(`/review?pageNumber=${pageNumber}`);
    return result.data;
  }

  const patchReview = async (reviewId: number , patchReviewData: patchReviewType) => {
    const result = await axiosWithAuth.patch(`/review/${reviewId}`, patchReviewData);
    return result.data
  }
  
  const deleteReview = async (reviewId: number) => {
    const result = await axiosWithAuth.delete(`/review/${reviewId}`);
    return result.data;
  }

  const like = async ({liked}: {liked: likeReviewType}) => {
    const result = await axiosWithAuth.post(`/like`, liked);
    return result.data
  }
  
  const reportReview = async (reportData: reportType) => {
    const result = await axiosWithAuth.post(`/notice`, reportData );
    return result.data
  };

  const getReviewByStoreId = async (storeId: number) => {
    const result = await axiosNonAuth.get(`/review/store/${storeId}`);
    return result.data;
  }

  return {
    getReviewAll,
    getReviewOne,
    postReview,
    patchReview,
    deleteReview,
    like,
    reportReview,
    getReviewByStoreId
  }
}

export default ReviewApi;
