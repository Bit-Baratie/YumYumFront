'use client';
import ReviewApi from "@/app/(api)/review/reviewApi";
import { useState } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import userStore from "../userStore";
import { useRouter } from "next/navigation";

const useReview = () => {
  const { deleteReview, getReviewAll, getReviewOne, patchReview, postReview } = ReviewApi();
  const [reviewOne, setReviewOne] = useState<any>();
  const queryClient = useQueryClient();
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
        return data.last? undefined: data.pageNumber+1;
    }
  });
  const createReview = useMutation({
    mutationFn: (postReviewData: FormData) => postReview(postReviewData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['reviewList']});
      router.back();
    },
    onError: () => alert('잠시후 다시 시도해주세요')
  });
  const updateReview = useMutation({
    mutationFn: ({reviewId, patchReviewData}: {reviewId: number, patchReviewData: FormData}) => 
      patchReview({reviewId: reviewId, patchReviewData: patchReviewData}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['reviewList']});
      router.back();
    },
    onError: () => alert('잠시후 다시 시도해주세요')
  });
  const removeReview = useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId),
    onSuccess: () =>{
      queryClient.invalidateQueries({queryKey:['reviewList']});
      router.back();
    },
    onError: () => alert('잠시후 다시 시도해주세요')
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
      alert('잠시후 다시 시도해주세요');
      router.back();
    }
    
  }

  const createReviewHandler = async (storeId: number, image: File[]) => {
    const formData = new FormData();
    image.forEach((img) => formData.append('files', img));

    console.log(formData.getAll('files'))
    const reviewData = {
      storeId: storeId,
      content: content,
      grade: rating 
    };

    formData.append('createReviewDto', new Blob([JSON.stringify(reviewData)], {type: 'application/json'}));
    createReview.mutate(formData);
  }

  const updateReviewHandler = async (reviewId: number, image: File[]) => {
    const formData = new FormData();
    image.forEach((img) => formData.append('files', img));

    const reviewData = {
      content: content,
      grade: rating,
      imageList: []
    };

    formData.append('updateReviewRequestDto', new Blob([JSON.stringify(reviewData)], {type: 'application/json'}));
    updateReview.mutate({reviewId: reviewId, patchReviewData: formData});
  }

  const removeReviewHandler = (reviewId: number) => {
    removeReview.mutate(reviewId);
  }
  
  return {
    reviewOne, content, rating,
    contentHandler, handleStarClick,
    fetchReviewOne, createReviewHandler, updateReviewHandler, removeReviewHandler, data,
    fetchNextPage, isFetching, isFetchingNextPage, status,
    setContent
  }
}

export default useReview;
