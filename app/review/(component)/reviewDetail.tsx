"use client";

import "../review.scss";
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
      <div className="review">
        <div className="top">
          <button className="back" />
          <div className="flqb">리뷰</div>
          {/* 드롭다운 */}
          <div className="dropdown">
            <button
              className="edit"
              onClick={() => {
                setView(!view);
              }}
            />
            {view && <Dropdown memberId={reviewOne?.memberId} />}
          </div>
        </div>
        <div className="storeInfo">
          <div className="sn">{reviewOne?.storeName}</div>
          <div className="add">{reviewOne?.address}</div>
        </div>
        <div className="ddd">
          <div className="profile">
            <Image
              src={"/"}
              width={100}
              height={100}
              alt="이미지"
              className="profile-img"
            />
            <div className="profile-info">
              <p className="profile-name">{reviewOne?.nickname}프로필 이름</p>
              <p className="profile-date">{reviewOne?.createdAt}2020.20.20</p>
              <p className="profile-star">
                별점: {reviewOne?.grade} &nbsp; 평균 별점: {reviewOne?.avgGrade}{" "}
                ({reviewOne?.totalReviewCount})
              </p>
            </div>
          </div>

          <LikeButton
            reviewId={reviewOne?.reviewId}
            likeStatus={reviewOne?.likeStatus}
          />
        </div>
        <div className="review-content">{reviewOne?.content}</div>
        <div className="review-image">
          {reviewOne?.images?.map((imageUrl: string) => (
            <Image
              key={imageUrl}
              src={"/"}
              width={100}
              height={100}
              alt="리뷰이미지"
              className="review-image-img"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
