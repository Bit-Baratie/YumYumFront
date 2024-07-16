"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";
import { adminReportStore } from "@/app/type";

const ReportStore = ({ store }: { store: adminReportStore }) => {

  return (
    <tr className={UserStyle.trStyle}>
      <td className={UserStyle.Unikname}>
        {/* {reportContent[0]?.nickname} */}
        {store.nickName}
      </td>
      <td className={UserStyle.email}>{store.targetContent}</td>
      <td className={UserStyle.date}>{store.reportReason}</td>
      <td>{store.createdAt}<button className={UserStyle.UBtnStyle}>삭제</button></td>

    </tr>
  );
};

export default ReportStore;
