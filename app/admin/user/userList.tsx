"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";
import useMember from "@/app/(hooks)/member/useMember";

interface ReportData {
  reportId: number;
  nickName: string;
  reportContents: string;
  reportReason: string;
  createdAt: string;
  targetContent: string;
}

const UserList = ({ reportData }: { reportData: ReportData }) => {
  const [page, setPage] = useState(1);

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
      {reportData && (
        <tr className={UserStyle.trStyle}>
          <td className={UserStyle.Unikname}>{reportData?.reportId}꼬마돌</td>
          <td className={UserStyle.email}>{}ddd@naver.com</td>
          <td className={UserStyle.userNumbe}>010-1234-5678</td>
          <td className={UserStyle.date}>
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
