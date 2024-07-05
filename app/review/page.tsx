import Headers from "../header";
import Profile from "./profile";
import "./review.scss";
import Comment from "./(component)/comment/comment";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { postReviewInfo } from "./(api)/reviewApi";
// import LikeButton from "@/app/(component)/likeButton";
import ReviewItem from "@/app/(component)/reviewItem";
// import useReview from "../(hooks)/review/useReview";
// import useUserInfo from "@/app/(hooks)/useUserInfo";

const Review = () => {
  // const {reviewOne} = useReview();

  return (
    <>
      <Headers />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </>
  );
};

export default Review;
