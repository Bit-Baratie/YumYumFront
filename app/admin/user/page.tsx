import Header from "@/app/header";
import UserList from "./userList";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
// import SideBar from "../sidebar";
// import SideBar from "../(component)/sideBar";

const userPage = () => {
  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>사용자 목록</p>
        <Search />
      </div>
      <table className={AdminStyle.tableStyle}>
        <thead>
          <tr className={AdminStyle.trStyle}>
            <th className={AdminStyle.nickname}>닉네임</th>
            <th className={AdminStyle.reviewContent}>이메일</th>
            <th className={AdminStyle.reportContent}>연락처</th>
            <th className={AdminStyle.date}>상태</th>
          </tr>
        </thead>
        <tbody>
          <UserList />
          <UserList />
          <UserList />
          <UserList />
        </tbody>
      </table>
    </div>
  );
};

export default userPage;
