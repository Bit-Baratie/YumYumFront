"use client";

import Headers from "../header";
// import "@/app/review/review.module.scss";
import { useRef } from "react";
import ReviewItem from "@/app/(component)/review/reviewItem";
import useReview from "@/app/(hooks)/review/useReview";
import Link from "next/link";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import { getReviewType } from "@/app/type";
import ReviewSkeleton from "@/app/(component)/skeleton/review";

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
      {isFetching && <ReviewSkeleton/>}
      {status === 'success' &&
      <>
        {data?.pages.map((page) => (
          <div key={page}>
          {page.content.map((reviewItem:getReviewType) => (
              <Link key={reviewItem.reviewId} href={`/review/${reviewItem.reviewId}`}>
                <ReviewItem reviewItem={reviewItem} />
              </Link>
          ))}
          </div>
        ))}
      </>
      }
      
      <div ref={bottomRef}></div>

      {isFetchingNextPage && <p>NextLoading...</p>}
    </>
  );
};

export default Review;
