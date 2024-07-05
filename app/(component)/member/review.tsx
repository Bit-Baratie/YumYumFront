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
              myReviewList?.map((item) => {
                  return (<DashboardReview key={item.id} item={item}/>)
              })
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