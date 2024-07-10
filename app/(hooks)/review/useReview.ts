'use client';
import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import { useRouter } from "next/navigation";

const useReview = () => {
  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview, reportReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>();
  const {
    data,
    fetchNextPage,
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
  });
  const [content, setContent] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const { userInfo } = userStore();
  const [reportText, setReportText] = useState("");
  const router = useRouter();
  
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
      imageList: []
    };

    patchReview(reviewId, reviewData);
    router.push('/review');
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
    router.push('/review');
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const createReport = (reviewId: number) => {
    const reportData = {
      targetId: reviewId,
      content: reportText,
      reportType: '리뷰'
    };
    
    reportReview(reportData);
  }
  
  return {
    reviewOne, content, rating, reportText,
    contentHandler, handleStarClick,
    fetchReviewOne, createReview, modifyReview, removeReview, data, handleTextareaChange, createReport,
    fetchNextPage, isFetching, isFetchingNextPage, status
  }
}

export default useReview;
