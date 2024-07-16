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
  const router = useRouter();
  
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1); 
  };

  const fetchReviewOne = async (reviewId: number) => {
    const result = await getReviewOne(reviewId);
    if (result?.status === 200) {
      setReviewOne(result.data);
    } else {
      alert('잠시후 다시 시도해주세요'+result.error);
      router.back();
    }
    
  }

  const createReview = async (storeId: number, image: File[]) => {
    const formData = new FormData();
    image.forEach((img) => formData.append('files', img));

    console.log(formData.getAll('files'))
    const reviewData = {
      storeId: storeId,
      content: content,
      grade: rating 
    };

    formData.append('createReviewDto', new Blob([JSON.stringify(reviewData)], {type: 'application/json'}));

    const response = await postReview(formData);
    
    if (response?.status === 201) {
      router.back();
    } else {
      alert("Failed to create review");
    }
  }

  const modifyReview = async (reviewId: number, image: File[]) => {
    const formData = new FormData();
    image.forEach((img) => formData.append('files', img));

    const reviewData = {
      content: content,
      grade: rating,
      imageList: []
    };

    formData.append('patchReviewDto', new Blob([JSON.stringify(reviewData)], {type: 'application/json'}));

    const result = await patchReview(reviewId, formData);
    if (result?.status === 202) {
      alert('수정이 완료되었습니다');
      router.push(`/review/${reviewId}`);
    }
  }

  const removeReview = (reviewId: number) => {
    deleteReview(reviewId);
    router.push('/review');
  }
  
  return {
    reviewOne, content, rating,
    contentHandler, handleStarClick,
    fetchReviewOne, createReview, modifyReview, removeReview, data,
    fetchNextPage, isFetching, isFetchingNextPage, status
  }
}

export default useReview;
