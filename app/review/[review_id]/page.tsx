// import "@/app/(component)/review/review.module.scss";
import CommentList from "@/app/(component)/reply/commentList";
import React, { useState } from "react";
import Review from "@/app/(component)/review/reviewDetail";

const ReviewDatail = () => {
  return (
    <>
      <Review />
      <CommentList />
    </>
  );
};

export default ReviewDatail;
