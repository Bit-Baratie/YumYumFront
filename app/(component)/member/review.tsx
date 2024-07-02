import reviewStyle from "@/app/(component)/member/review.module.scss";

const ReviewContainer = () => {
  const cnt = [1, 1, 1, 1];
  return (
      <div className={reviewStyle.dashboard}>
          {
              cnt.map(() => {
                  return (<DashboardReview/>)
              })
          }
      </div>
  );
}

const DashboardReview = () => {
  return (
      <div>
          <div className={reviewStyle.dashboardItem}>
            <div className={reviewStyle.head}>
                <div>동대문닫기떡볶이</div>
                <div>
                    <span>🤍 21</span>&nbsp;&nbsp;<span>💬 20</span>
                </div>
              </div>
              <div className={reviewStyle.content}>
                  <span>내용</span>
              </div>
          </div>
      </div>
  ); 
}

export default ReviewContainer;