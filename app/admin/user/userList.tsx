"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";
import useMember from "@/app/(hooks)/member/useMember";
import Swal from "sweetalert2";
import router from "next/router";
import AdminApi from "@/app/(api)/admin/adminApi";

interface UserData {
  email: string;
  isDeleted: boolean;
  nickname: string;
  phoneNumber: string;
}

const UserList = ({ userData }: { userData: UserData }) => {
  const [page, setPage] = useState(1);
  const { deleteUser } = AdminApi();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const { removeMember } = useMember();
  // const [reportContent, setReportContent] = useState();
  // const { getUserReport } = adminApi();

  // const fetchUserReport = async () => {
  //   const result = await getUserReport();
  //   setReportContent(result.content);
  // };

  // useEffect(() => {
  //   fetchUserReport();
  // }, []);

  return (
    <>
      {userData && (
        <tr className={UserStyle.trStyle}>
          <td className={UserStyle.Unikname}>{userData?.nickname}</td>
          <td className={UserStyle.email}>{userData.email}</td>
          <td className={UserStyle.userNumbe}>{userData.phoneNumber}</td>
          <td className={UserStyle.date}>
            {userData.isDeleted}
            상태{" "}
            <button className={UserStyle.UBtnStyle} onClick={removeMember}>
              회원탈퇴
            </button>{" "}
          </td>
        </tr>
      )}
    </>
  );
};

export default UserList;
