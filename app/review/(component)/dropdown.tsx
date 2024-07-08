"use client";

import React, { useState } from "react";
import "./dropdown.scss";
import userStore from "@/app/(hooks)/userStore";
import Link from "next/link";
import ReportModal from "@/app/(component)/reportModal";

const Dropdown = ({ memberId }: { memberId: number }) => {
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
        <Link href={"./write"}>
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
