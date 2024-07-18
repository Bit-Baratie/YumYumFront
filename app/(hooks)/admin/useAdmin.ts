'use client';

import AdminApi from "@/app/(api)/admin/adminApi";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

// interface Report {
//   id: string;
//   // type: string; // 댓글, 리뷰, 맛집
//   reportedContent: string; // 신고된 내용
//   reportedId: string; // 신고된 id
//   reportedReason: string; // 신고 이유
//   reporterId: string; // 신고자 id
//   reporter: string; //신고자 닉네임
// }

// interface ReportType {
//   comment: string;
//   review: string;
//   user: string;
// }


const useAdmin = () => {
  const { deleteUser, deleteComment, deleteReview, deleteStore } = AdminApi();

  const removeUser = async (memberId: number) => {
    const result = await deleteUser(memberId);
    if (result?.status === 204) {
      alert('유저 정보를 삭제했습니다.');
    } else {
      alert('잠시후 다시 시도해주세요');
    }
  }
  const removeReply = async (replyId: number) => {
    const result = await deleteComment(replyId);
    if (result?.status === 204) {
      alert('댓글을 삭제했습니다.');
    } else {
      alert('잠시후 다시 시도해주세요');
    }
  }

  const removeReview = async (reviewId: number) => {
    const result = await deleteReview(reviewId);
    if (result?.status === 204) {
      alert('리뷰를 삭제했습니다.');
    } else {
      alert('잠시후 다시 시도해주세요');
    }
  }
  const removeStore = async (storeId: number) => {
    const result = await deleteStore(storeId);
    if (result?.status !== 204) {
      Swal.fire({
        title: "요청을 실패하였습니다",
        text: "다시 한 번 시도해주십시오",
        showCancelButton: true,
        confirmButtonText: "확인",
        icon: "error",
      })
    }
  }

  // const getReviewReport = async (type: string) => {
  //   const result = await getReport("review");
  //   return result.data;

  return {
    removeUser,
    removeReply,
    removeReview,
    removeStore
  }
}
export default useAdmin;

