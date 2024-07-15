"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import StoreStyle from "@/app/admin/store/storeList.module.scss";
import { adminStoreType } from "@/app/type";
import Link from "next/link";
import { cn } from "@nextui-org/react";

const StoreList = ({ store }: { store: adminStoreType }) => {

  return (
    <tr className={StoreStyle.trStyle}>
      <Link href={`/store/${store.storeId}`} >
        <td className={StoreStyle.Unikname}>
          {/* {reportContent[0]?.nickname} */}
          {store.name}
        </td>
      </Link>
      <td className={StoreStyle.email}>{store.address}</td>
      <td className={StoreStyle.userNumbe}>{store.call}</td>
      <td className={StoreStyle.date}>{store.isClosed}<button className={StoreStyle.UBtnStyle}>삭제</button>{" "}
      </td>
    </tr>
  );
};

export default StoreList;
