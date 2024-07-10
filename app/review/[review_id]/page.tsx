import "@/app/review/review.module.scss";
import CommentList from "@/app/review/commentList";
import React, { useState } from "react";
import Review from "@/app/review/(component)/reviewDetail";

const ReviewDatail = () => {
  return (
    <>
      <Review />
      <CommentList />
    </>
  );
};

export default ReviewDatail;
