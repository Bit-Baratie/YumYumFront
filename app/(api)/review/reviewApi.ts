import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";

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

interface likeType {
  status: boolean;
  reviewId: number;
}

interface ReportData {
  reviewId: number;
  reportText: string;
}

const ReviewApi = () => {
  const {axiosWithAuth, axiosNonAuth} = useAxiosWithAuth();

// 내가 하려는거...
const getReviewOne = async (reviewId: number) => {
  const result = await axiosNonAuth.get(`http://192.168.0.20:3000/review/${reviewId}`);

  return result;
}

// 용안이랑 완성한거
  const postReview = async (postReviewData: PostReview) => {
    const result = await axiosWithAuth.post(`/review`, postReviewData)
  
    return result;
  }

  const getReviewAll = async () => {
    const result = await axiosNonAuth.get(`/review`);
  
    return result;
  }

  const patchReview = async (reviewId: number , patchReviewData: patchReviewType) => {
    const result = await axiosWithAuth.patch(`${process.env.NEXT_PUBLIC_SERVER_IP}/review/${reviewId}`, patchReviewData)
  }
  
  const deleteReview = async (reviewId: number) => {
    await axiosWithAuth.delete(`${process.env.NEXT_PUBLIC_SERVER_IP}/review/${reviewId}`)
  }

  const like = async ({liked}: {liked: likeType}) => {
    console.log(liked);
    await axiosWithAuth.post(`/like`, liked)
  }
  
  const reportReview = async (reportData: ReportData) => {
    await axiosWithAuth.post(`/notice`, reportData );
  };

  return {
    getReviewAll,
    getReviewOne,
    postReview,
    patchReview,
    deleteReview,
    like,
    reportReview
  }
}

export default ReviewApi;
