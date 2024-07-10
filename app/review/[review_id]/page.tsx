import "@/app/review/review.module.scss";
import Comment from "@/app/review/(component)/comment/comment";
import React, { useState } from "react";
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
