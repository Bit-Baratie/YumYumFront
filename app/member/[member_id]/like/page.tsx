'use client'
import ReviewItem from "@/app/(component)/reviewItem";
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
          <>
            {page.content.map((item: getReviewType) => (
              <Link href={`/review/${item.reviewId}`}>
                <ReviewItem reviewItem={item}/>
              </Link>
            ))}
          </>
        ))}
      </div>

      <div ref={bottomRef}></div>
    </>
  );
}

export default LikePage;