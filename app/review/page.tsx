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
  const { data, fetchNextPage } = useReview();
  const bottomRef = useRef(null);

  const useObserver = ({
    target,
    rootMargin = '0px',
    threshold = 1.0,
    onIntersect,
  }: any) => {
    useEffect(() => {
      let observer: IntersectionObserver | undefined;

      if (target && target.current) {
        observer = new IntersectionObserver(onIntersect, {
          root: null,
          rootMargin,
          threshold,
        });

        observer.observe(target.current);
      }
      return () => observer && observer.disconnect();
    }, [target, rootMargin, threshold, onIntersect]);
  };

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect,
  });

  return (
    <>
      <Headers />
      {data && data.pages.length > 0?
      <>
      {data?.pages.map((item) => {
        item.content?.map((reviewItem: GetReviewOne) => {
          return(
            <Link key={reviewItem.reviewId} href={`/review/${reviewItem.reviewId}`}>
              <ReviewItem reviewItem={reviewItem} />
            </Link>);
      })
      
      })}</>:<div>작성된 리뷰가 없습니다</div>
    }
    <div ref={bottomRef}></div>
    </>
  );
};

export default Review;
