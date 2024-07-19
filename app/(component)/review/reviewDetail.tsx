"use client";
import DetailStyle from "@/app/(component)/review/review.module.scss";
import React, { useEffect, useState } from "react";
import Dropdown from "@/app/(component)/review/dropdown";
import LikeButton from "@/app/(component)/review/likeButton";
import useReview from "@/app/(hooks)/review/useReview";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Header from "@/app/header";
import useImage from "@/app/(hooks)/common/useImage";
import CustomImage from "@/app/(component)/common/customImage";

const ReviewDetail = () => {
  const { fetchReviewOne, reviewOne, removeReviewHandler} = useReview();
  const params = useParams();
  const router = useRouter();
  const [view, setView] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    fetchReviewOne(Number(params.review_id));
  }, []);

  return (
    <>
      <Header />
      <div className={DetailStyle.review}>
        <div className={DetailStyle.top}>
          <button className={DetailStyle.back} onClick={() => router.back()}/>
          <div className={DetailStyle.flqb}>리뷰</div>
          {/* 드롭다운 */}
          <div className={DetailStyle.dropdown}>
            <button
              className={DetailStyle.edit}
              onClick={() => {
                setView(!view);
              }}
            />
            {view && <Dropdown memberId={reviewOne?.memberId} reviewData={reviewOne} removeReview={removeReviewHandler}/>}
          </div>
        </div>
        <div className={DetailStyle.storeInfo}>
          <div className={DetailStyle.sn}>{reviewOne?.storeName}</div>
          <div className={DetailStyle.add}>{reviewOne?.address}</div>
        </div>
        <div className={DetailStyle.ddd}>
          <div className={DetailStyle.profile}>
            <CustomImage
              style={DetailStyle.profileImg}
              src={reviewOne?.imageUrl}
              width={100}
              height={100}
              alt="이미지"
            />
            <div className={DetailStyle.profileInfo}>
              <p className={DetailStyle.profileName}>
                {reviewOne?.nickname}
              </p>
              <p className={DetailStyle.profileDate}>
                {reviewOne?.createdAt}
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
          {reviewOne?.imageList?.map((imageUrl: string) => (
            <CustomImage
              key={imageUrl}
              src={imageUrl}
              width={100}
              height={100}
              alt="리뷰이미지"
              style={DetailStyle.reviewImageImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewDetail;
