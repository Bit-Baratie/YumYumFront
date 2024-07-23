"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useAdmin from "@/app/(hooks)/admin/useAdmin";
import UserStyle from "@/app/admin/user/userList.module.scss";

interface UserData {
  memberId: number;
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

  const WithdrawalUser = () => {
    Swal.fire({
      title: "회원을 삭제하시겠습니까?",
      text: "삭제 버튼 선택 시 회원은 삭제되며 복구되지 않습니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      icon: "warning",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await removeUser(userData?.memberId);
          if (response?.success) {
            Swal.fire("삭제가 완료되었습니다", "", "success");
            router.push("/admin/user");
          } else {
            Swal.fire("삭제에 실패했습니다", "다시 시도해 주세요", "error");
          }
        } catch (error) {
          Swal.fire("삭제에 실패했습니다", "다시 시도해 주세요", "error");
        }
      }
    });
  };

  return (
    <>
      {userData && (
        <tr className={UserStyle.trStyle}>
          <td className={UserStyle.Unikname}>{userData?.nickname}</td>
          <td className={UserStyle.email}>{userData.email}</td>
          <td className={UserStyle.userNumbe}>{userData.phoneNumber}</td>
          <td className={UserStyle.date}>
            {userData.isDeleted ? "탈퇴" : "활성화"}
            <button
              className={UserStyle.UBtnStyle}
              onClick={() => WithdrawalUser()}
            >
              회원탈퇴
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default UserList;
