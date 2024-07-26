import reviewStyle from "@/app/(component)/member/review.module.scss";
import Link from "next/link";
import { getReviewType } from "@/app/type";
import { StarFilled, CommentOutlined } from "@ant-design/icons";
import Reply from "@/public/asset/image/replyIcon.svg";

const ReviewContainer = ({
  myReviewList,
}: {
  myReviewList: getReviewType[];
}) => {
  return (
    <>
      {myReviewList[0] && <DashboardReview item={myReviewList[0]} />}
      {myReviewList[1] && <DashboardReview item={myReviewList[1]} />}
      {myReviewList[2] && <DashboardReview item={myReviewList[2]} />}
      {myReviewList[3] && <DashboardReview item={myReviewList[3]} />}
    </>
  );
};

const DashboardReview = ({ item }: { item: getReviewType }) => {
  return (
    <Link href={`/review/${item?.reviewId}`}>
      <div className={reviewStyle.dashboardItem}>
        <div className={reviewStyle.head}>
          <div>{item?.nickname}</div>
          <div>
            <span>
              <StarFilled /> {item?.grade}
            </span>
            &nbsp;&nbsp;
            <span>
              <Reply width="25" height="25" fill={'white'}/>
              {item?.replyCount}
            </span>
          </div>
        </div>
        <div className={reviewStyle.content}>
          <span>{item?.content}</span>
        </div>
      </div>
    </Link>
  );
};

export default ReviewContainer;
