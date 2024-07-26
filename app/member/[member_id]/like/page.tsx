'use client'
import ReviewItem from "@/app/(component)/review/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";
import PageStyle from './page.module.scss';
import Link from "next/link";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import { useRef } from "react";
import { getReviewType } from "@/app/type";

const LikePage = () => {
  const {likeReviewList, nextLikeReviewList} = useMember();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && nextLikeReviewList();

  useObserver({
    target: bottomRef,
    onIntersect
  });
  
  return (
    <>
      <div className={PageStyle.container}>
        {likeReviewList?.pages.map((page) => (
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

export default LikePage;