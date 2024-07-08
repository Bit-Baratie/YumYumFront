import Profile from "@/app/review/profile";
import "@/app/review/review.scss";
import Comment from "@/app/review/(component)/comment/comment";
import React, { useState } from "react";
import Dropdown from "@/app/review/Dropdown";
// import { postReviewInfo } from "@/app/(api)/reiviewApi";
import LikeButton from "@/app/(component)/likeButton";
import ReviewItem from "@/app/(component)/reviewItem";
// import useReview from "../(hooks)/review/useReview";
// import useUserInfo from "@/app/(hooks)/useUserInfo";
import Review from "@/app/review/(component)/reviewDetail";

const ReviewDatail = () => {
  return (
    <>
      <Review />
      <Comment />
    </>
  );
};

export default ReviewDatail;
