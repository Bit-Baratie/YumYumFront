"use client";

import Logo from "@/public/asset/image/logoBlack.svg";
import NavStyle from "@/app/admin/(component)/NavBar.module.scss";
import Link from "next/link";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

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
            <Link href={"/home"}>
              <Logo style={{}} />
            </Link>
          </div>
          <div className={NavStyle.adminId}>Admin</div>
        </div>
        <div className={NavStyle.spah}>
          <div className={NavStyle.search}>
            <input
              type="text"
              className={NavStyle.sideBarSearch}
              placeholder="Search"
            ></input>
            {/* <SearchOutlined /> */}
          </div>
          <div className={NavStyle.list}>
            <ul
              className={`${NavStyle.dropdown} ${view ? NavStyle.active : ""}`}
              onClick={() => {
                setView(!view);
              }}
            >
              사용자 관리
              {view ? <UpOutlined /> : <DownOutlined />}
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
              매장 관리
              {storeView ? <UpOutlined /> : <DownOutlined />}
              {storeView && (
                <>
                  <Link href={"/admin/store"}>
                    <li>매장 목록</li>
                  </Link>
                  <Link href={"/admin/store"}>
                    <li>매장 등록</li>
                  </Link>
                  <Link href={"/admin/store"}>
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
              리뷰 관리
              {reviewView ? <UpOutlined /> : <DownOutlined />}
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
              댓글 관리
              {replyView ? <UpOutlined /> : <DownOutlined />}
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
