'use client';

import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

interface GetReviewOne {
  reviewId: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  reviewTotalCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];
}

const useReview = () => {
  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview, reportReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>(); 
  // const { data, error, isLoading } = useQuery({ queryKey: ['reviewList'], queryFn: () => getReviewAll({pageNumber: Number(searchParams.get('pageNumber'))}) });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery<any>({
    queryKey: ['reviewList'],
    queryFn: ({pageParam}) => getReviewAll({pageNumber:pageParam}),
    initialPageParam: 0,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageable.pageNumber+1;
    }
  })
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

  const modifyReview = (reviewId: number) => {
    const reviewData = {
      content: content,
      grade: rating,
      memberId: userInfo.memberId
    };

    patchReview(reviewId, reviewData);
    router.push('/review');
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
    router.push('/review')
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
    fetchReviewOne, createReview, modifyReview, removeReview, data, handleTextareaChange, createReport,
    fetchNextPage
  }
}

export default useReview;
