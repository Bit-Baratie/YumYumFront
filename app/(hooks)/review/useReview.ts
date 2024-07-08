'use client';

import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import { useParams } from "next/navigation";

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

interface reportData{
  reviewId: number;
  reportText: string;
}

const useReview = () =>{

  
  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview , reportReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>(); 
  const {data, error, isLoading} = useQuery<any>({queryKey: ['reviewList'], queryFn: getReviewAll});  // 1개의 리뷰 리스트 밖에 못들어오기 때문에 array
  const [content, setContent] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  // const [] = useState<string>(''); 리뷰 상세 가져오기
  const {userInfo} = userStore();
  const [reportText, setReportText] = useState("");
  
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
      memberId: userInfo.memberId,
      imageList: []
    };
    console.log(reviewData);

    postReview(reviewData);
  }

  const modifyReview = (reviewId: number) => {
    const reviewData = {
      content: content,
      grade: rating,
      memberId: userInfo.memberId
    };

    patchReview(reviewId, reviewData);
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const createReport = (reviewId : number) => {
    const reportData = {
      reviewId: reviewId,
      reportText: reportText
    }
    reportReview(reportData);
  }
  
  return {
    reviewOne, content, rating, reportText,
    contentHandler, handleStarClick,
    fetchReviewOne, createReview, modifyReview, removeReview, data, handleTextareaChange,createReport
  }
}

export default useReview;