'use client';

import AdminApi from "@/app/(api)/admin/adminApi";
import { useState } from "react";

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
  const { deleteUser, deleteComment, deleteReview } = AdminApi();

  const removeUser = async (memberId: number) => {
    const result = await deleteUser(memberId);
    if(result?.status === 204) {
      alert('유저 정보를 삭제했습니다.');
    }else {
      alert('잠시후 다시 시도해주세요');
    }
  }
  const removeReply = async (replyId: number) => {
    const result = await deleteComment(replyId);
    if (result?.status === 204) {
      alert('댓글을 삭제했습니다.');
    }else {
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
  // const getReviewReport = async (type: string) => {
  //   const result = await getReport("review");
  //   return result.data;

  return {
    removeUser,
    removeReply,
    removeReview
  }
}
export default useAdmin;

