import Image from 'next/image';
import reviewStyle from './reviewItem.module.scss'

export const ReviewItem = () => {
  return (
    <div className={reviewStyle.reviewItem}>
      <div className={reviewStyle.storeInfo}>
        <span className={reviewStyle.storeName}>엽기떡볶이</span>
        <span className={reviewStyle.addr}>서울 강남구 강남대로 20</span>
      </div>

      <div className={reviewStyle.profile}>
        <div>프로필</div>
        <div className={reviewStyle.meta}>
          <span className={reviewStyle.smallBlack}>푸바오야가지마</span><br></br>
          <span className={reviewStyle.smallGray}>별 리뷰개수 평균별점</span>  
        </div>
        <div>❤️</div>
      </div>
      <div>
        내용
      </div>
      <div>
        <Image className={reviewStyle.profileImage} src={'/./'} width={150} height={150} alt='리뷰이미지'/>
      </div>
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