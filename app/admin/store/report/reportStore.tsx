"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import StoreReport from "@/app/admin/store/report/storeReport.module.scss";
import { adminReportStore } from "@/app/type";

const ReportStore = ({ store }: { store: adminReportStore }) => {
  return (
    <tr className={StoreReport.trStyle}>
      <td className={StoreReport.Unikname}>
        {/* {reportContent[0]?.nickname} */}
        {store.nickName}
      </td>
      <td className={StoreReport.email}>{store.targetContent}</td>
      <td className={StoreReport.date}>{store.reportReason}</td>
      <td>
        {store.createdAt}
        {/* <button className={StoreReport.UBtnStyle}>삭제</button> */}
      </td>
    </tr>
  );
};

export default ReportStore;
