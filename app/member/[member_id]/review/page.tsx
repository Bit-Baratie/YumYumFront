'use client'
import ReviewItem from "@/app/(component)/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";
import PageStyle from './page.module.scss';

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
    (myReviewList !== undefined?
      <div className={PageStyle.container}>
      {myReviewList.content.map((item: GetReviewOne) => {
        return(<ReviewItem reviewItem={item}/>)
      })}
      </div>:
      <div>작성한 리뷰가 없습니다</div>
    )
  );
}

export default ReviewPage;