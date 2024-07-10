'use client'
import ReviewItem from "@/app/(component)/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";
import PageStyle from './page.module.scss';
import Link from "next/link";

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
  const {myReviewList} = useMember();

  return (
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
  );
}

export default ReviewPage;