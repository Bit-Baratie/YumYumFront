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

const LikePage = () => {
  const {likeReviewList} = useMember();

  return (
    (likeReviewList !== undefined?
      <div className={PageStyle.container}>
      {likeReviewList.content.map((item: GetReviewOne) => {
        return(<ReviewItem reviewItem={item}/>);
      })}</div>:
      <div>좋아요 한 리뷰가 없습니다</div>
    )
  );
}

export default LikePage;