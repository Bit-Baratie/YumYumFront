import { getReviewAll, getReviewOne } from "@/app/(api)/review/reviewApi";
import { useState } from "react";

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
  const [reviewOne, setReviewOne] = useState<ReviewData>();
  const [reviewList, setReviewList] = useState<Array<ReivewList>>();  // 1개의 리뷰 리스트 밖에 못들어오기 때문에 array
  
  const fetchReviewOne = async (reviewId:number, storeId:number) => {
    const result = await getReviewOne(reviewId, storeId);
    setReviewOne(result); 
    
  }

  const fetchReviewList = async() => {
    const result = await getReviewAll();
    setReviewList(result);
  }
  
  return {
    reviewOne, reviewList
  }
}

export default useReview;