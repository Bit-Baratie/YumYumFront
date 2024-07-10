"use client";
import Image from "next/image";
import reviewStyle from "@/app/(component)/reviewItem.module.scss";
import React from "react";
import { getReviewType } from "../type";

const ReviewItem = ({ reviewItem }: { reviewItem: getReviewType }) => {
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
          <Image
            src={"/"}
            width={100}
            height={100}
            alt="이미지"
            className={reviewStyle.profileImg}
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
              {reviewItem?.reviewTotalCount})
            </p>
          </div>
          {/* <LikeButton reviewId={reviewItem?.reviewId} /> */}
        </div>
      </div>
      <div className={reviewStyle.reviewContent}>
        {reviewItem?.content}
      </div>
      <div className={reviewStyle.reviewImg}>
        <Image
          className={reviewStyle.reivewImage}
          // src={'/./'}
          src={"/asset/image/ddddddd.JPG"}
          width={350}
          height={350}
          alt="리뷰이미지"
        />
        <Image
          className={reviewStyle.reivewImage}
          src={"/asset/image/ddddddd.JPG"}
          width={350}
          height={350}
          alt="리뷰이미지"
        />
        <Image
          className={reviewStyle.reivewImage}
          src={"/asset/image/ddddddd.JPG"}
          width={350}
          height={350}
          alt="리뷰이미지"
        />
        <div className={reviewStyle.contL}>
          <Image
            className={reviewStyle.reivewImageLast}
            src={"/asset/image/ddddddd.JPG"}
            width={350}
            height={350}
            alt="리뷰이미지"
          />
          <p>+3</p>
        </div>
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
