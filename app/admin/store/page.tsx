import Header from "@/app/header";
import "@/app/admin/comment/comment.module.scss";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
import UserList from "@/app/admin/user/userList"
// import SideBar from "../sidebar";
// import SideBar from "../(component)/sideBar";

const userPage = () => {
  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>매장 목록</p>
        <Search />
      </div>
      <table className={AdminStyle.tableStyle}>
        <thead>
          <tr className={AdminStyle.trStyle}>
            <th className={AdminStyle.nickname}>매장</th>
            <th className={AdminStyle.reviewContent}>주소</th>
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
