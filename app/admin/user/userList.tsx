"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";

const UserList = () => {
  const [reportContent, setReportContent] = useState();
  const { getUserReport } = adminApi();

  const fetchUserReport = async () => {
    const result = await getUserReport();
    setReportContent(result.content);
  };

  useEffect(() => {
    fetchUserReport();
  }, []);

  return (
    <tr className={UserStyle.trStyle}>
      <td className={UserStyle.Unikname}>
        {/* {reportContent[0]?.nickname} */}
        꼬마돌
      </td>
      <td className={UserStyle.email}>ddd@naver.com</td>
      <td className={UserStyle.userNumbe}>010-1234-5678</td>
      <td className={UserStyle.date}>
        상태 <button className={UserStyle.UBtnStyle}>회원탈퇴</button>{" "}
      </td>
    </tr>
  );
};

export default UserList;
