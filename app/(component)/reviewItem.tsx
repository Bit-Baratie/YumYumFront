"use client";

import Image from "next/image";
import reviewStyle from "@/app/(component)/reviewItem.module.scss";
import Profile from "@/app/review/profile";
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import LikeButton from "@/app/(component)/likeButton";
import useReview from "../(hooks)/review/useReview";
import { useParams, useRouter } from "next/navigation";

// interface GetReviewOne {
//     imageUrl: string;
//     nickname: string;
//     createdAt: string;
//     totalReviewCount: number;
//     grade: number;
//     avgGrade: number;
//     storeName: string;
//     address: string;
//     content: string;
//     images: string[];
// }

interface GetReviewOne {
  reviewId: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  totalReviewCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];
}

const ReviewItem = ({ reviewItem }: { reviewItem: GetReviewOne }) => {
  return (
    <div className={reviewStyle.reviewItem}>
      <div className={reviewStyle.storeInfo}>
        <span className={reviewStyle.storeName}>
          {reviewItem?.storeName}엽기떡볶이
        </span>
        <span className={reviewStyle.addr}>
          {reviewItem?.address}서울 강남구 강남대로 20
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
              {reviewItem?.nickname}프로필 이름
            </p>
            <p className={reviewStyle.profileDate}>
              {reviewItem?.createdAt}2020.20.20
            </p>
            <p className={reviewStyle.profileStar}>
              별점: {reviewItem?.grade}
              &nbsp; 평균 별점: {reviewItem?.avgGrade}(
              {reviewItem?.totalReviewCount})
            </p>
          </div>
          <LikeButton reviewId={reviewItem?.reviewId} />
        </div>
      </div>
      <div className={reviewStyle.reviewContent}>
        Armageddon Shoot Imma get 'em Shoot Watch Uh Imma bite back Uh 짙은
        어둠이 막아설 땐 Uh 한 걸음 앞으로 날아든 It's bad 사라진 Feedback
        시작된 Code black Uh 깊어가 혼란스러운 밤 악몽은 또 짙게 번져가 뭔갈
        숨기려고 해 I got it, I got it 혼돈을 타고 덮쳐 Killing like Bang chitty
        bang Bang chitty bang bang 'Cause I wanna see I wanna see truly Bang
        chitty bang Bang chitty bang bang 내게 다가와 다가와 Imma get it
        {/* {reviewOne?.content} */}
      </div>
      <div className={reviewStyle.reviewImg}>
        {reviewItem?.content}
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
