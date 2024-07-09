import reviewStyle from "@/app/(component)/member/review.module.scss";
import Link from "next/link";

interface MyReviewType {
    reviewId: number;
    name: string;
    address: string;
    nickName: string;
    grade: number;
    imageUrl: string;
    content: string;
}

const ReviewContainer = ({myReviewList} : {myReviewList:MyReviewType[]}) => {
  return (
      <div className={reviewStyle.dashboard}>
          {
             <>
                  {myReviewList[0]?<DashboardReview item={myReviewList[0]}/>:''}
                  {myReviewList[1]?<DashboardReview item={myReviewList[1]}/>:''}
                  {myReviewList[2]?<DashboardReview item={myReviewList[2]}/>:''}
                  {myReviewList[3]?<DashboardReview item={myReviewList[3]}/>:''}
            </>
          }
      </div>
  );
}

const DashboardReview = ({item}: {item:MyReviewType}) => {
  return (
      <Link href={`/review/${item?.reviewId}`}>
          <div className={reviewStyle.dashboardItem}>
            <div className={reviewStyle.head}>
                <div>{item?.nickName}</div>
                <div>
                    <span>⭐️ {item?.grade}</span>&nbsp;&nbsp;<span>💬 20</span>
                </div>
              </div>
              <div className={reviewStyle.content}>
                  <span>{item?.content}</span>
              </div>
          </div>
      </Link>
  ); 
}

export default ReviewContainer;