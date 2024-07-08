"use client";

import DetailStyle from "@/app/review/review.module.scss";
import React, { useEffect, useState } from "react";
// import Dropdown from "@/app/review/Dropdown";
import Dropdown from "@/app/review/(component)/dropdown";
import LikeButton from "@/app/(component)/likeButton";
import useReview from "@/app/(hooks)/review/useReview";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Header from "@/app/header";

interface GetReviewOne {
  id: number;
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

const Review = () => {
  const { fetchReviewOne, reviewOne } = useReview();
  const params = useParams();
  const router = useRouter();
  const [view, setView] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    fetchReviewOne(Number(params.review_id));
    console.log(reviewOne);
  }, []);

  return (
    <>
      <Header />
      <div className={DetailStyle.review}>
        <div className={DetailStyle.top}>
          <button className={DetailStyle.back} />
          <div className={DetailStyle.flqb}>리뷰</div>
          {/* 드롭다운 */}
          <div className={DetailStyle.dropdown}>
            <button
              className={DetailStyle.edit}
              onClick={() => {
                setView(!view);
              }}
            />
            {view && <Dropdown memberId={reviewOne?.memberId} reviewData={reviewOne}/>}
          </div>
        </div>
        <div className={DetailStyle.storeInfo}>
          <div className={DetailStyle.sn}>{reviewOne?.storeName}</div>
          <div className={DetailStyle.add}>{reviewOne?.address}</div>
        </div>
        <div className={DetailStyle.ddd}>
          <div className={DetailStyle.profile}>
            <Image
              src={"/"}
              width={100}
              height={100}
              alt="이미지"
              className={DetailStyle.profileImg}
            />
            <div className={DetailStyle.profileInfo}>
              <p className={DetailStyle.profileName}>
                {reviewOne?.nickname}프로필 이름
              </p>
              <p className={DetailStyle.profileDate}>
                {reviewOne?.createdAt}2020.20.20
              </p>
              <p className={DetailStyle.profileStar}>
                별점: {reviewOne?.grade} &nbsp; 평균 별점: {reviewOne?.avgGrade}{" "}
                ({reviewOne?.totalReviewCount})
              </p>
            </div>
          </div>

          <div className={DetailStyle.HeartPosition}>
            <LikeButton
              reviewId={reviewOne?.reviewId}
              likeStatus={reviewOne?.likeStatus}
            />
          </div>
        </div>
        <div className={DetailStyle.reviewContent}>{reviewOne?.content}</div>
        <div className={DetailStyle.reviewImage}>
          {reviewOne?.images?.map((imageUrl: string) => (
            <Image
              key={imageUrl}
              src={"/"}
              width={100}
              height={100}
              alt="리뷰이미지"
              className={DetailStyle.reviewImageImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
