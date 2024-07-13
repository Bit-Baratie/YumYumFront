"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { report } from "process";
import AdminApi from "@/app/(api)/admin/adminApi";
import ReviewStyle from "@/app/admin/review/reviewList.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import Pagination from "react-js-pagination";
import PageStyle from "@/app/admin/pageStyle.module.scss";

interface ReportData {
  reportId: number;
  nickName: string;
  reportContents: string;
  reportReason: string;
  createdAt: string;
  targetContent: string;
}

const ReviewList = ({ reportData }: { reportData: ReportData }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // const [reportContents, setReportContents] = useState<any>();
  // const { getReviewReport } = AdminApi();

  // const fetchReviewReport = async () => {
  //   const result = await getReviewReport();
  //   setReportContents(result.content);
  // };

  // useEffect(() => {
  //   fetchReviewReport();
  // }, []);

  return (
    <>
      {reportData && (
        <tr className={ReviewStyle.trStyle}>
          <td className={ReviewStyle.nickname}>
            {reportData?.reportId}
            {reportData?.nickName}
          </td>
          <td className={ReviewStyle.reviewContent}>
            {reportData?.targetContent}
            랄랄ㄹ랄라라라라@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          </td>
          <td className={ReviewStyle.reportContent}>
            {reportData?.reportReason}
            @@@@@@@
          </td>
          <td className={ReviewStyle.data}>
            {reportData?.createdAt}
            <button className={ReviewStyle.BtnStyle}>
              <CloseOutlined />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default ReviewList;
