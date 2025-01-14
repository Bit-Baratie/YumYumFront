'use client'
import ReviewItem from "@/app/(component)/review/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";
import PageStyle from './page.module.scss';
import Link from "next/link";
import { useRef } from "react";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import { getReviewType } from "@/app/type";

const ReviewPage = () => {
  const {myReviewList, nextMyReviewList} = useMember();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && nextMyReviewList();

  useObserver({
    target: bottomRef,
    onIntersect
  });
  
  return (
    <>
      <div className={PageStyle.container}>
        {myReviewList?.pages.map((page) => (
          <div key={page.pageNumber}>
            {page.content.map((item: getReviewType) => (
              <ReviewItem reviewItem={item} key={item.reviewId}/>
            ))}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
    </>
  );
}

export default ReviewPage;