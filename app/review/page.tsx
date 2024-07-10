"use client";

import Headers from "../header";
import Profile from "./profile";
import "@/app/review/review.module.scss";
import Comment from "./(component)/comment/comment";
import React, { useEffect, useRef, useState } from "react";
// import { postReviewInfo } from "./(api)/reviewApi";
// import LikeButton from "@/app/(component)/likeButton";
import ReviewItem from "@/app/(component)/reviewItem";
import useReview from "../(hooks)/review/useReview";
import Link from "next/link";
import { useObserver } from "../(hooks)/common/useObserver";
// import useReview from "../(hooks)/review/useReview";
// import useUserInfo from "@/app/(hooks)/useUserInfo";

interface GetReviewOne {
  reviewId: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  reviewTotalCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];
}



const Review = () => {
  const { data, fetchNextPage, isFetching, isFetchingNextPage, status } = useReview();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect
  });

  console.log(data)
  
  return (
    <>
      <Headers />
      {isFetching&& <p>Loading...</p>}
      {status === 'success' &&
      <>
        {data?.pages.map((page) => (
          <>
          {page.content.map((reviewItem:GetReviewOne) => (
              <Link key={reviewItem.reviewId} href={`/review/${reviewItem.reviewId}`}>
                <ReviewItem reviewItem={reviewItem} />
              </Link>
          ))}
          </>
        ))}
      </>
      }

    {/* {status === 'success' &&
      <>
          {data?.pages[4].content?.map((reviewItem:GetReviewOne, index:number) => {
            return(
              <Link key={reviewItem.reviewId} href={`/review/${reviewItem.reviewId}`}>
                <ReviewItem reviewItem={reviewItem} />
              </Link>
            );
          })}</>
      }  */}
      
      <div ref={bottomRef}></div>

      {isFetchingNextPage&&<div>NextLoading...</div>}
    </>
  );
};

export default Review;
