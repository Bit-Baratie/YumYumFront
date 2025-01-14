"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import StoreStyle from "@/app/admin/store/storeList.module.scss";
import { adminStoreType } from "@/app/type";
import Link from "next/link";
import { cn } from "@nextui-org/react";
import useAdmin from "@/app/(hooks)/admin/useAdmin";
import useRegister from "@/app/admin/store/(hooks)/useRegister";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CloseCircleFilled } from "@ant-design/icons";

const StoreList = ({ store }: { store: adminStoreType }) => {
  const router = useRouter();
  const { removeStore } = useAdmin();
  const { setStoreId } = useRegister();
  const removeStoreHandler = () => {
    Swal.fire({
      title: "매장을 삭제하시겠습니까?",
      text: "삭제 버튼 선택 시 매장은 삭제 되며 복구되지 않습니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        removeStore(store.storeId);
        Swal.fire({
          title: "삭제가 완료되었습니다",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        router.refresh();
      } else {
        Swal.fire({
          title: "삭제를 실패하였습니다",
          text: "다시 시도하여주십시오",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
        router.refresh();
      }
    });
  }

  return (
    <tr className={StoreStyle.trStyle}>
      <td className={StoreStyle.Unikname}>
        <Link href={`/store/${store.storeId}`}  >
          {store.name}
        </Link>
      </td>
      <td className={StoreStyle.email}>{store.address}</td>
      <td className={StoreStyle.userNumbe}>{store.call}</td>
      <td className={StoreStyle.date}>{store.isClosed == false ? "영업중" : "폐업"}
        <Link className={StoreStyle.modifyLink} href={`/admin/store/${store.storeId}`}><button className={StoreStyle.modifyBtn} onClick={() => setStoreId(store.storeId)}>수정</button></Link>
        <button className={StoreStyle.delBtn} onClick={() => removeStoreHandler()}><CloseCircleFilled /></button>
      </td>
    </tr>
  );
};

export default StoreList;
