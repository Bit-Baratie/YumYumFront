"use client";

import CommentList from "@/app/admin/comment/commentList";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
import { useEffect, useState } from "react";
import AdminApi from "@/app/(api)/admin/adminApi";
// import Paging from "../(component)/pagenation";
import Paging from "@/app/admin/(component)/pagenation";
import "./../(component)/Paging.scss";

interface CReportData {
  createdAt: string;
  nickName: string;
  reportId: string;
  reportReason: string;
  targetContent: string;
  targetId: number;
}

const CommentPage = () => {
  const [page, setPage] = useState();
  const [reportContents, setReportContents] = useState<Array<CReportData>>([]);
  const [loading, setLoading] = useState(true);
  const { getCommentReport } = AdminApi();

  useEffect(() => {
    fetchCommentReport();
  }, []);

  const fetchCommentReport = async () => {
    const result = await getCommentReport();
    setReportContents(result.content);
    console.log(result.data);
    setLoading(false);
  };

  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>댓글 신고 목록</p>
        <Search />
      </div>
      <table className={AdminStyle.tableStyle}>
        <thead>
          <tr className={AdminStyle.trStyle}>
            <th className={AdminStyle.nickname}>신고자</th>
            <th className={AdminStyle.reviewContent}>댓글 내용</th>
            <th className={AdminStyle.reportContent}>신고 내용</th>
            <th className={AdminStyle.createdAt}>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {reportContents.map((reportData) => (
            <CommentList key={reportData.reportId} reportData={reportData} />
          ))}
        </tbody>
      </table>
      {!loading && <Paging />}
    </div>
  );
};

export default CommentPage;
