"use client";

import React from "react";
import { useEffect, useState } from "react";
import AdminApi from "@/app/(api)/admin/adminApi";
import Search from "../(component)/Search";
import ReviewList from "./reviewList";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Paging from "../(component)/pagenation";
import "./../(component)/Paging.scss";
import AdminStyle from "@/app/admin/admin.module.scss";
import { useSearchParams } from "next/navigation";

interface ReportData {
  reportId: number;
  nickName: string;
  reportContents: string;
  reportReason: string;
  createdAt: string;
  targetContent: string;
}

const AdminReview = () => {
  const [page, setPage] = useState(1);
  const [reportContents, setReportContents] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { getReviewReport } = AdminApi();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetchReviewReport(Number(searchParams.get("pageNumber")) - 1);
    console.log(searchParams.get("pageNumber"));
  }, [searchParams.get("pageNumber")]);

  const fetchReviewReport = async (page: number) => {
    const result = await getReviewReport(page);
    setReportContents(result);
    setLoading(false);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    console.log(page);
  };

  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>리뷰 신고 목록</p>
        <Search />
      </div>
      {loading ? (
        <p>Loading...</p> // 로딩 중 표시
      ) : (
        <table className={AdminStyle.tableStyle}>
          <thead>
            <tr className={AdminStyle.trStyle}>
              <th className={AdminStyle.nickname}>신고자</th>
              <th className={AdminStyle.reviewContent}>리뷰 내용</th>
              <th className={AdminStyle.reportContent}>신고 내용</th>
              <th className={AdminStyle.date}>작성일자</th>
            </tr>
          </thead>
          <tbody>
            {reportContents.content.map((reportData: ReportData) => (
              <ReviewList key={reportData.reportId} reportData={reportData} />
            ))}
          </tbody>
        </table>
      )}
      {!loading && (
        <Paging reportContents={reportContents} />

        // <Pagination
        //   activePage={page}
        //   itemsCountPerPage={5}
        //   totalItemsCount={100}
        //   pageRangeDisplayed={5}
        //   prevPageText={<LeftOutlined />}
        //   nextPageText={<RightOutlined />}
        //   onChange={handlePageChange}
        // />
      )}
    </div>
  );
};

export default AdminReview;
