import reviewStyle from './reviewItem.module.scss'

export const ReviewItem = () => {
  return (
    <div>

    </div>
  );
}





// 마이페이지_나의정보 리뷰미리보기

export const ReviewContainer = () => {
  const cnt = [1,1,1,1];
  return (
    <div className={reviewStyle.dashboard}>
      {cnt.map(() => {
        return(<DashboardReview/>)
      })}
    </div>
  );
}

const DashboardReview = () => {
  return (
    <div>
      <div className={reviewStyle.dashboardItem}>
        <div className={reviewStyle.name}>동대문닫기떡볶이</div>
        <div className={reviewStyle.info}><span>🤍 21</span>&nbsp;&nbsp;<span>💬 20</span></div>
        <div className={reviewStyle.content}><span>내용</span></div>
      </div>
    </div>
  );
}