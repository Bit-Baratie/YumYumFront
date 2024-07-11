"use client";
import React, { useState } from "react";
import "./dropdown.scss";
import userStore from "@/app/(hooks)/userStore";
import Link from "next/link";
import ReportModal from "@/app/(component)/reportModal";
import { getReviewType } from "@/app/type";
import useModal from "@/app/(hooks)/common/useModal";

const Dropdown = ({ memberId, reviewData, removeReview }: { memberId: number, reviewData: getReviewType, removeReview:(reviewId:number) => void }) => {
  const { userInfo } = userStore();
  const {modal, setModal, createReviewReport} = useModal();

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div>
      <ul className="edit-list">
        {userInfo.memberId !== memberId && (
          // {4 !== memberId && (
          <li className="tlsrh" onClick={() => setModal(true)}>
            신고하기
          </li>
        )}
        <Link href={{pathname:"./write", query: {data: JSON.stringify(reviewData)}}}>
          {/* {userInfo.memberId === memberId ? <li className="tnwjd">수정</li> : ""} */}
          {userInfo.memberId === memberId ? <li className="tnwjd">수정</li> : ""}
        </Link>
          {/* {userInfo.memberId === memberId ? <li className="tkrwp">삭제</li> : ""} */}
          {userInfo.memberId === memberId ? <li className="tkrwp" onClick={() => removeReview(reviewData.reviewId)}>삭제</li> : ""}
      </ul>
      {modal && <ReportModal onClose={() => closeModal()} reviewId={reviewData.reviewId} createReport={createReviewReport}/>}
    </div>
  );
};

export default Dropdown;
