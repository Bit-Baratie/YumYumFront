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
    return result;
  }

  const getReviewAll = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosNonAuth.get(`/review?pageNumber=${pageNumber}`);
    return result.data;
  }

  const patchReview = async (reviewId: number , patchReviewData: patchReviewType) => {
    const result = await axiosWithAuth.patch(`/review/${reviewId}`, patchReviewData)
  }
  
  const deleteReview = async (reviewId: number) => {
    await axiosWithAuth.delete(`/review/${reviewId}`)
  }

  const like = async ({liked}: {liked: likeReviewType}) => {
    console.log(liked);
    await axiosWithAuth.post(`/like`, liked)
  }
  
  const reportReview = async (reportData: reportType) => {
    await axiosWithAuth.post(`/notice`, reportData );
  };

  const getReviewBySroteId = async (storeId: number) => {
    const result = await axiosNonAuth.get(`/review/store/${storeId}`);
    return result;
  }

  return {
    getReviewAll,
    getReviewOne,
    postReview,
    patchReview,
    deleteReview,
    like,
    reportReview,
    getReviewBySroteId
  }
}

export default ReviewApi;
