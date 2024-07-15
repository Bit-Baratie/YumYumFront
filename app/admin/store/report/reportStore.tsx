"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";
import { adminStoreType } from "@/app/type";

const ReportStore = ({ store }: { store: adminStoreType }) => {

  return (
    <tr className={UserStyle.trStyle}>
      <td className={UserStyle.Unikname}>
        {/* {reportContent[0]?.nickname} */}
        {store.name}
      </td>
      <td className={UserStyle.email}>{store.address}</td>
      <td className={UserStyle.userNumbe}>{store.call}</td>
      <td className={UserStyle.date}>{store.isClosed}</td>
      <td>맛이 변했어요 ㅜ<button className={UserStyle.UBtnStyle}>삭제</button></td>

    </tr>
  );
};

export default ReportStore;
