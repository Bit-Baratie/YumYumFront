'use client'
import Header from "@/app/header";
import "@/app/admin/comment/comment.module.scss";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "@/app/admin/(component)/Search";
import UserList from "@/app/admin/store/report/reportStore";
// import SideBar from "../sidebar";
// import SideBar from "../(component)/sideBar";
import { adminReportStore } from "@/app/type";

const ReportPage = () => {
  const [adminStore, setAdminStore] = useState<Array<adminReportStore>>();
  const { getStoreReport } = adminApi();


  useEffect(() => {
    const fetchAdminStore = async () => {
      const result = await getStoreReport();
      setAdminStore(result.content);
    }
    fetchAdminStore();
  }, [])



  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>매장 목록</p>
        <Search />
      </div>
      <table className={AdminStyle.tableStyle}>
        <thead>
          <tr className={AdminStyle.trStyle}>
            <th className={AdminStyle.nickname}>닉네임</th>
            <th className={AdminStyle.reviewContent}>매장명</th>
            <th className={AdminStyle.reportContent}>신고내용</th>
            <th className={AdminStyle.date}>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {adminStore?.map(store => (
            <UserList
              key={store.reportId}
              store={store}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
