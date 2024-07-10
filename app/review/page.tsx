"use client";

import Headers from "../header";
import "@/app/review/review.module.scss";
import { useRef } from "react";
import ReviewItem from "@/app/(component)/reviewItem";
import useReview from "../(hooks)/review/useReview";
import Link from "next/link";
import { useObserver } from "../(hooks)/common/useObserver";
import { getReviewType } from "../type";

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
      {isFetching && <p>Loading...</p>}
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
