"use client";

import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import UserStyle from "@/app/admin/user/userList.module.scss";
import useMember from "@/app/(hooks)/member/useMember";
import Swal from "sweetalert2";
import router from "next/navigation";
import useAdmin from "@/app/(hooks)/admin/useAdmin";
import { useRouter } from "next/navigation";

interface UserData {
  reviewId: number;
  email: string;
  isDeleted: boolean;
  nickname: string;
  phoneNumber: string;
}

const UserList = ({ userData }: { userData: UserData }) => {
  const [page, setPage] = useState(1);
  const { removeUser } = useAdmin();

  const router = useRouter();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const WithdrawalUSer = () => {
    Swal.fire({
      title: "회원을 삭제하시겠습니까?",
      text: "삭제 버튼 선택 시 회원은 삭제 되며 복구되지 않습니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        removeUser(userData?.reviewId);
        Swal.fire("삭제가 완료되었습니다", "", "success");
        router.push("/admin/user");
      }
    });
  };

  // const { removeMember } = useMember();
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
            <button
              className={UserStyle.UBtnStyle}
              onClick={() => WithdrawalUSer()}
            >
              회원탈퇴
            </button>{" "}
          </td>
        </tr>
      )}
    </>
  );
};

export default UserList;
function removeUser(reviewId: number) {
  throw new Error("Function not implemented.");
}
