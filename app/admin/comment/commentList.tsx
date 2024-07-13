"use client";

import { useEffect, useState } from "react";
// import "./adminCommentList.scss";
import CommentStyle from "@/app/admin/comment/comment.module.scss";
import AdminApi from "@/app/(api)/admin/adminApi";

interface CReportData {
  createdAt: string;
  nickName: string;
  reportId: string;
  reportReason: string;
  targetContent: string;
  targetId: number;
}

const CommentList = ({ reportData }: { reportData: CReportData }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
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
            {reportData?.reportId}
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
            <button className={CommentStyle.BtnStyle}>X</button>
          </td>
        </tr>
      )}
    </>
  );
};

export default CommentList;
