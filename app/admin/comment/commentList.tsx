"use client";

import { useEffect, useState } from "react";
// import "./adminCommentList.scss";
import CommentStyle from "@/app/admin/comment/comment.module.scss";
import AdminApi from "@/app/(api)/admin/adminApi";
import Swal from "sweetalert2";
import router from "next/router";
import { CloseCircleFilled } from "@ant-design/icons";
import useAdmin from "@/app/(hooks)/admin/useAdmin";
import { useRouter } from "next/navigation";

interface CReportData {
  createdAt: string;
  nickName: string;
  reportId: number;
  reportReason: string;
  targetContent: string;
  targetId: number;
}

const CommentList = ({ reportData }: { reportData: CReportData }) => {
  const [page, setPage] = useState(1);
  // const { deleteComment } = AdminApi();
  const { removeReply } = useAdmin();

  const router = useRouter();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const WithdrawalReply = () => {
    Swal.fire({
      title: "댓글을 삭제하시겠습니까?",
      text: "삭제 버튼 선택 시, 리뷰는 삭제되며 복구되지 않습니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        removeReply(reportData?.reportId);
        Swal.fire("삭제가 완료되었습니다", "", "success");
        router.push("/admin/comment");
      }
    });
  };
  // const [reportContents, setReportContents] = useState<any>();
  // const { getCommentReport } = AdminApi();

  // const fetchCommentReport = async () => {
  //   const result = await getCommentReport();
  //   setReportContents(result.content);
  // };

  // useEffect(() => {
  //   fetchCommentReport();
  // }, []);

  return (
    <>
      {reportData && (
        <tr className={CommentStyle.trStyle}>
          <td className="nikname">
            {/* {reportData?.reportId} */}
            {reportData?.nickName}
          </td>
          <td className={CommentStyle.commentContent}>
            {reportData?.targetContent}
          </td>
          <td className={CommentStyle.reportContent}>
            {reportData?.reportReason}
          </td>
          <td className={CommentStyle.date}>
            {reportData?.createdAt}
            <button
              className={CommentStyle.BtnStyle}
              onClick={() => WithdrawalReply()}
            >
              <CloseCircleFilled />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default CommentList;
function removeReply(reviewId: number) {
  throw new Error("Function not implemented.");
}
