import Image from "next/image";
import reviewStyle from "@/app/(component)/review/reviewItem.module.scss";
import React from "react";
import { getReviewType } from "../../type";
import useImage from "@/app/(hooks)/common/useImage";

const ReviewItem = ({ reviewItem }: { reviewItem: getReviewType }) => {
  const { errorImage } = useImage();

  return (
    <div className={reviewStyle.reviewItem}>
      <div className={reviewStyle.storeInfo}>
        <span className={reviewStyle.storeName}>
          {reviewItem?.storeName}
        </span>
        <span className={reviewStyle.addr}>
          {reviewItem?.address}
        </span>
      </div>

      <div className={reviewStyle.bottom}>
        {/* 프로필 */}
        <div className={reviewStyle.profile}>
          <img
            src={reviewItem?.profileImage}
            width={100}
            height={100}
            alt="이미지"
            className={reviewStyle.profileImg}
            onError={errorImage}
          />
          <div className={reviewStyle.profileInfo}>
            <p className={reviewStyle.profileName}>
              {reviewItem?.nickname}
            </p>
            <p className={reviewStyle.profileDate}>
              {reviewItem?.createdAt}
            </p>
            <p className={reviewStyle.profileStar}>
              별점: {reviewItem?.grade}
              &nbsp; 평균 별점: {reviewItem?.avgGrade}(
              {reviewItem?.totalReviewCount})
            </p>
          </div>
          {/* <LikeButton reviewId={reviewItem?.reviewId} /> */}
        </div>
      </div>
      <div className={reviewStyle.reviewContent}>
        {reviewItem?.content}
      </div>
      <div className={reviewStyle.reviewImg}>



        {reviewItem.imageList?.length > 0 ? <Image
          className={reviewStyle.reivewImage}
          // src={'/./'}

          src={reviewItem.imageList[0]}
          width={350}
          height={350}
          alt="리뷰이미지"
        /> : ""}
        {reviewItem.imageList?.length > 1 ? <Image
          className={reviewStyle.reivewImage}
          src={reviewItem.imageList[1]}
          width={350}
          height={350}
          alt="리뷰이미지"
        /> : ''}
        {reviewItem.imageList?.length > 2 ? <Image
          className={reviewStyle.reivewImage}
          src={reviewItem.imageList[2]}
          width={350}
          height={350}
          alt="리뷰이미지"
        /> : ''}
        {reviewItem.imageList?.length > 3 ? <div className={reviewStyle.contL}>
          <Image
            className={reviewStyle.reivewImageLast}
            src={reviewItem.imageList[3]}
            width={350}
            height={350}
            alt="리뷰이미지"
          />
          {reviewItem.imageList?.length > 4 ? <p>+{reviewItem.imageList.length - 3}</p> : ''}
        </div> : ''}
      </div>
    </div>
  );
};

export default ReviewItem;

// 마이페이지_나의정보 리뷰미리보기 하트버튼 useEffect() => {     const fetchData = async()=> {
// const res = await axios.get('http://localhost3000/member??')         if(
// res.data.type === 'liked') setDefaultHighWaterMark(true)     } fetchData();
// }, []); const toggleLike = async(e) => {     const res = await
// axios.post('http://localhost3000/member??)     setDefaultHighWaterMark(!like)
// } return (     <>     <HeartButton like={like} onClick={toggleLike}/>
// <Detail content={content}/>     </> );
