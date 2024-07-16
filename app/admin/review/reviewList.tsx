"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import AdminApi from "@/app/(api)/admin/adminApi";
import ReviewStyle from "@/app/admin/review/reviewList.module.scss";
import { CloseCircleFilled, CloseOutlined } from "@ant-design/icons";
import Pagination from "react-js-pagination";
import PageStyle from "@/app/admin/pageStyle.module.scss";
import Swal from "sweetalert2";
import router from "next/router";

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
  const { deleteReview } = AdminApi();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // const removeReview = () => {
  //   Swal.fire({
  //     title: "리뷰를 삭제하시겠습니까?",
  //     text: "삭제 버튼 선택 시, 리뷰는 삭제되며 복구되지 않습니다.",
  //     showCancelButton: true,
  //     confirmButtonText: "삭제",
  //     icon: "warning",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteReview();
  //       Swal.fire("삭제가 완료되었습니다", "", "success");
  //       router.push("/admin/review");
  //     }
  // });
  // };

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
          <td className={ReviewStyle.date}>
            {reportData?.createdAt}
            <button
              className={ReviewStyle.BtnStyle}
              // onClick={removeReview}
            >
              <CloseCircleFilled />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default ReviewList;
