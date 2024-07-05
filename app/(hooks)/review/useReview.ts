import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";

interface ReviewData {
  nickname: string;
  reviewCount: number;
  gradeAvg: number;
  profileImg: string;
  content: string;
  grade: number;
  writeTime: Date;
}

interface ReivewList{
  id: number;
  content: string;
  grade: number;
}

const useReview = () =>{

  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>();
  // const {data, error, isLoading} = useQuery<Array<ReivewList>>({queryKey: ['reviewList'], queryFn: getReviewAll});  // 1개의 리뷰 리스트 밖에 못들어오기 때문에 array
  const [content, setContent] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  // const [] = useState<string>(''); 리뷰 상세 가져오기
  const {userInfo} = userStore();
  
  const contentHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(content);
  }

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1); 
};

  const fetchReviewOne = async (reviewId:number) => {
    const result = await getReviewOne(reviewId);
    console.log(result);
    setReviewOne(result);
  }

  const createReview = (storeId:number) => {
    const reviewData = {
      storeId: storeId,
      content: content,
      grade: rating,
      memberId: userInfo.id
    };
    console.log(reviewData);

    postReview(reviewData);
  }

  const modifyReview = (reviewId: number) => {
    const reviewData = {
      content: content,
      grade: rating,
      memberId: userInfo.id
    };

    patchReview(reviewId, reviewData);
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
  }
  
  return {
    reviewOne, content, rating,
    contentHandler, handleStarClick,
    fetchReviewOne, createReview, modifyReview, removeReview
  }
}

export default useReview;