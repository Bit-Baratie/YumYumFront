"use client";

import React, { useState } from "react";
import "./dropdown.scss";
import userStore from "@/app/(hooks)/userStore";
import Link from "next/link";
import ReportModal from "@/app/(component)/reportModal";
import { useRouter } from "next/router";

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

const Dropdown = ({ memberId, reviewData }: { memberId: number, reviewData: GetReviewOne }) => {
  const { userInfo } = userStore();
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

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
          {4 === memberId ? <li className="tnwjd">수정</li> : ""}
        </Link>
        <Link href={"./"}>
          {/* {userInfo.memberId === memberId ? <li className="tkrwp">삭제</li> : ""} */}
          {4 === memberId ? <li className="tkrwp">삭제</li> : ""}
        </Link>
      </ul>
      {modal && <ReportModal onClose={closeModal} />}
    </div>
  );
};

export default Dropdown;
