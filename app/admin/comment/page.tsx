"use client";

import CommentList from "@/app/admin/comment/commentList";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
import { useEffect, useState } from "react";
import AdminApi from "@/app/(api)/admin/adminApi";
// import Paging from "../(component)/pagenation";
import Paging from "@/app/admin/(component)/pagenation";
import "./../(component)/Paging.scss";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Loading from "@/app/admin/(component)/Loading";

interface CReportData {
  createdAt: string;
  nickName: string;
  reportId: string;
  reportReason: string;
  targetContent: string;
  targetId: number;
}

const CommentPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [reportContents, setReportContents] = useState<Array<CReportData>>([]);
  const [loading, setLoading] = useState(true);
  const { getCommentReport } = AdminApi();

  useEffect(() => {
    fetchCommentReport();
  }, [page, totalPages]);

  const fetchCommentReport = async () => {
    const result = await getCommentReport(page - 1);
    setReportContents(result.content);
    setTotalPages(result.totalElements);
    setLoading(false);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    console.log(page);
  };

  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>댓글 신고 목록</p>
        <Search />
      </div>
      {loading ? (
        <div className={AdminStyle.load}>
          <Loading />{" "}
        </div>
      ) : (
        <>
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
                <CommentList
                  key={reportData.reportId}
                  reportData={reportData}
                />
              ))}
            </tbody>
          </table>

          <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={totalPages}
            pageRangeDisplayed={5}
            prevPageText={<LeftOutlined />}
            nextPageText={<RightOutlined />}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default CommentPage;
