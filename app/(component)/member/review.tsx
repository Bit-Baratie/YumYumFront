import reviewStyle from "@/app/(component)/member/review.module.scss";
import Link from "next/link";

interface MyReviewType {
    id: number;
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
                  <DashboardReview key={myReviewList[0].id} item={myReviewList[0]}/>
                  <DashboardReview key={myReviewList[1].id} item={myReviewList[1]}/>
                  <DashboardReview key={myReviewList[2].id} item={myReviewList[2]}/>
                  <DashboardReview key={myReviewList[3].id} item={myReviewList[3]}/>
            </>
          }
      </div>
  );
}

const DashboardReview = ({item}: {item:MyReviewType}) => {
  return (
      <Link href={`/review/${item.id}`}>
          <div className={reviewStyle.dashboardItem}>
            <div className={reviewStyle.head}>
                <div>{item.nickName}</div>
                <div>
                    <span>⭐️ {item.grade}</span>&nbsp;&nbsp;<span>💬 20</span>
                </div>
              </div>
              <div className={reviewStyle.content}>
                  <span>{item.content}</span>
              </div>
          </div>
      </Link>
  ); 
}

export default ReviewContainer;