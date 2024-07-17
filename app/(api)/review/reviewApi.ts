import {axiosNonAuth, axiosWithAuth} from "@/app/(hooks)/common/useAxiosWithAuth";
import { patchReviewType, postReviewType, likeReviewType, reportType } from "@/app/type";

const ReviewApi = () => {
  const getReviewOne = async (reviewId: number) => {
    const result = await axiosNonAuth.get(`/review/${reviewId}`);
    return result;
  }

  const postReview = async (postReviewData: FormData) => {
    const result = await axiosWithAuth.post(`/review`,
      postReviewData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    return result;
  }

  const getReviewAll = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosNonAuth.get(`/review?pageNumber=${pageNumber}`);
    return result.data;
  }

  const patchReview = async ({reviewId, patchReviewData}: {reviewId: number , patchReviewData: FormData}) => {
    const result = await axiosWithAuth.patch(`/review/${reviewId}`, patchReviewData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return result;
  }
  
  const deleteReview = async (reviewId: number) => {
    const result = await axiosWithAuth.delete(`/review/${reviewId}`);
    return result;
  }

  const like = async ({liked}: {liked: likeReviewType}) => {
    const result = await axiosWithAuth.post(`/like`, liked);
    return result;
  }
  
  const reportReview = async (reportData: reportType) => {
    const result = await axiosWithAuth.post(`/report`, reportData );
    return result;
  };

  const getReviewByStoreId = async (storeId: number) => {
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
    getReviewByStoreId
  }
}

export default ReviewApi;
