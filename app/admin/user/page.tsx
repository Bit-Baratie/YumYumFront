"use client";

import Header from "@/app/header";
import UserList from "./userList";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
import AdminApi from "@/app/(api)/admin/adminApi";
// import SideBar from "../sidebar";
// import SideBar from "../(component)/sideBar";

interface ReportData {
  reportId: number;
  nickName: string;
  reportContents: string;
  reportReason: string;
  createdAt: string;
  targetContent: string;
}

const userPage = () => {
  const [page, setPage] = useState(1);
  const [userCheck, setUserCheck] = useState<Array<ReportData>>([]);
  const [loading, setLoading] = useState(true);
  const { getuserAll } = AdminApi();

  useEffect(() => {
    fetchUserCheck();
  }, []);

  const fetchUserCheck = async () => {
    const result = await getuserAll();
    setUserCheck(result.content);
    setLoading(false);
    console.log(result.data);
  };

  // const handlePageChange = (page: React.SetStateAction<number>) => {
  //   setPage(page);
  //   console.log(page);
  // };

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
          {userCheck.map((reportData) => (
            <UserList key={reportData.reportId} reportData={reportData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default userPage;
