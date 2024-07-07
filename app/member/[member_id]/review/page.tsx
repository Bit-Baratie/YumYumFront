'use client'
import ReviewItem from "@/app/(component)/reviewItem";
import useMember from "@/app/(hooks)/member/useMember";

const ReviewPage = () => {
  const {myReviewList} = useMember();
  
  return (
    (myReviewList !== undefined?
      <ReviewItem/>:
      <div>작성한 리뷰가 없습니다</div>
    )
  );
}

export default ReviewPage;