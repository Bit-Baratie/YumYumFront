'use client';

import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import { useSearchParams, useRouter } from "next/navigation";

interface ReviewData {
  nickname: string;
  reviewCount: number;
  gradeAvg: number;
  profileImg: string;
  content: string;
  grade: number;
  writeTime: Date;
}

interface ReviewList {
  id: number;
  content: string;
  grade: number;
}

interface ReportData {
  reviewId: number;
  reportText: string;
}

const useReview = () => {
  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview, reportReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>(); 
  const { data, error, isLoading } = useQuery({ queryKey: ['reviewList'], queryFn: () => getReviewAll({pageNumber: Number(searchParams.get('pageNumber'))}) });
  const [content, setContent] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const { userInfo } = userStore();
  const [reportText, setReportText] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(content);
  }

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1); 
  };

  const fetchReviewOne = async (reviewId: number) => {
    const result = await getReviewOne(reviewId);
    console.log(result);
    setReviewOne(result);
  }

  const createReview = async (storeId: number) => {
    const reviewData = {
      storeId: storeId,
      content: content,
      grade: rating,
      imageList: []
    };

    const response = await postReview({postReviewData: reviewData});
    console.log(response)
    if (response.status === 201) {
      router.push("/review");
    } else {
      console.error("Failed to create review");
    }
  }

  const modifyReview = async (reviewId: number) => {
    const reviewData = {
      content: content,
      grade: rating,
      memberId: userInfo.memberId
    };

    const result = await patchReview(reviewId, reviewData);
    router.push('/review');
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const createReport = (reviewId: number) => {
    const reportData = {
      reviewId: reviewId,
      reportText: reportText
    }
    reportReview(reportData);
  }
  
  return {
    reviewOne, content, rating, reportText,
    contentHandler, handleStarClick,
    fetchReviewOne, createReview, modifyReview, removeReview, data, handleTextareaChange, createReport
  }
}

export default useReview;
