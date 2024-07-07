'use client'
import ReviewItem from "@/app/(component)/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";

const LikePage = () => {
  const {likeReviewList} = useMember();

  return (
    (likeReviewList !== undefined?
      <ReviewItem/>:
      <div>좋아요 한 리뷰가 없습니다</div>
    )
  );
}

export default LikePage;