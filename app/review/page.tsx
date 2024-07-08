"use client";

import Headers from "../header";
import Profile from "./profile";
import "@/app/review/review.module.scss";
import Comment from "./(component)/comment/comment";
import React, { useState } from "react";
// import { postReviewInfo } from "./(api)/reviewApi";
// import LikeButton from "@/app/(component)/likeButton";
import ReviewItem from "@/app/(component)/reviewItem";
import useReview from "../(hooks)/review/useReview";
import Link from "next/link";
// import useReview from "../(hooks)/review/useReview";
// import useUserInfo from "@/app/(hooks)/useUserInfo";

interface GetReviewOne {
  reviewId: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  totalReviewCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];
}

const Review = () => {
  const { data } = useReview();

  return (
    <>
      <Headers />
      {data && data.content.length > 0?
      <>
      {data?.content?.map((reviewItem: GetReviewOne) => {
        return(
          <Link href={`/review/${reviewItem.reviewId}`}>
            <ReviewItem key={reviewItem.reviewId} reviewItem={reviewItem} />
          </Link>);
      })}</>:<div>작성된 리뷰가 없습니다</div>
    }
    </>
  );
};

export default Review;
