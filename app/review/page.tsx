"use client";

import Headers from "../header";
import Profile from "./profile";
import "./review.scss";
import Comment from "./(component)/comment/comment";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
// import { postReviewInfo } from "./(api)/reviewApi";
// import LikeButton from "@/app/(component)/likeButton";
import ReviewItem from "@/app/(component)/reviewItem";
import useReview from "../(hooks)/review/useReview";
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
      {data?.content?.map((reviewItem: GetReviewOne) => {
        <ReviewItem key={reviewItem.reviewId} reviewItem={reviewItem} />;
      })}
    </>
  );
};

export default Review;
