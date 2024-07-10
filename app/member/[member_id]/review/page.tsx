'use client'
import ReviewItem from "@/app/(component)/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";
import PageStyle from './page.module.scss';
import Link from "next/link";
import { useRef } from "react";
import { useObserver } from "@/app/(hooks)/common/useObserver";

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
          <>
            {page.content.map((item: GetReviewOne) => (
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

export default ReviewPage;