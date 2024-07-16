"use client";

import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import Logo from "@/public/asset/image/logoBlack.svg";
import NavStyle from "@/app/admin/(component)/NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  const [view, setView] = useState(false);
  const [storeView, setStoreView] = useState(false);
  const [reviewView, setReviewView] = useState(false);
  const [replyView, setReplyView] = useState(false);

  return (
    <>
      <div className={NavStyle.container} />
      <div className={NavStyle.sideBar}>
        <div className={NavStyle.logoAdmin}>
          <div className={NavStyle.logo}>
            <Link href={"/admin"}>
              <Logo style={{}} />
            </Link>
          </div>
          <div className={NavStyle.adminId}>Admin</div>
        </div>
        <div className={NavStyle.spah}>
          <div className={NavStyle.list}>
            <ul
              className={`${NavStyle.dropdown} ${view ? NavStyle.active : ""}`}
              onClick={() => {
                setView(!view);
              }}
            >
              <span>사용자 관리</span>
              {view ? (
                <CaretUpFilled className={NavStyle.icon} />
              ) : (
                <CaretDownFilled className={NavStyle.icon} />
              )}
              {view && (
                <Link href={"/admin/user"}>
                  <li>사용자목록</li>
                </Link>
              )}
            </ul>

            <ul
              className={`${NavStyle.dropdown} ${
                storeView ? NavStyle.active : ""
              }`}
              onClick={() => {
                setStoreView(!storeView);
              }}
            >
              <span>매장 관리</span>
              {storeView ? (
                <CaretUpFilled className={NavStyle.icon} />
              ) : (
                <CaretDownFilled className={NavStyle.icon} />
              )}
              {storeView && (
                <>
                  <Link href={"/admin/store"}>
                    <li>매장 목록</li>
                  </Link>
                  <Link href={"/admin/store/register"}>
                    <li>매장 등록</li>
                  </Link>
                  <Link href={"/admin/store/report"}>
                    <li>매장 신고 목록</li>
                  </Link>
                </>
              )}
            </ul>

            <ul
              className={`${NavStyle.dropdown} ${
                reviewView ? NavStyle.active : ""
              }`}
              onClick={() => {
                setReviewView(!reviewView);
              }}
            >
              <span>리뷰 관리</span>
              {reviewView ? (
                <CaretUpFilled className={NavStyle.icon} />
              ) : (
                <CaretDownFilled className={NavStyle.icon} />
              )}
              {reviewView && (
                <Link href={"/admin/review"}>
                  <li>리뷰 신고 목록</li>
                </Link>
              )}
            </ul>

            <ul
              className={`${NavStyle.dropdown} ${
                replyView ? NavStyle.active : ""
              }`}
              onClick={() => {
                setReplyView(!replyView);
              }}
            >
              <span>댓글 관리</span>
              {replyView ? (
                <CaretUpFilled className={NavStyle.icon} />
              ) : (
                <CaretDownFilled className={NavStyle.icon} />
              )}
              {replyView && (
                <Link href={"/admin/comment"}>
                  <li>댓글 신고 목록</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
