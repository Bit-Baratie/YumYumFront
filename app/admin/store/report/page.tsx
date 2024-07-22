'use client'
import Header from "@/app/header";
import "@/app/admin/comment/comment.module.scss";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "@/app/admin/(component)/Search";
import UserList from "@/app/admin/store/report/reportStore";
import { adminReportStore } from "@/app/type";
import Loading from "../../(component)/Loading";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ReportPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [adminStore, setAdminStore] = useState<Array<adminReportStore>>();
  const { getStoreReport } = adminApi();


  useEffect(() => {
    const fetchAdminStore = async () => {
      const result = await getStoreReport(page - 1);
      setAdminStore(result.content);
      setTotalPages(result.totalElements);
      setLoading(false);
    }
    fetchAdminStore();
  }, [page, totalPages])

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    console.log(page);
  };



  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>매장 신고 목록</p>
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
                <th className={AdminStyle.nickname}>닉네임</th>
                <th className={AdminStyle.reviewContent}>매장명</th>
                <th className={AdminStyle.reportContent}>신고내용</th>
                <th className={AdminStyle.date}>작성일자</th>
              </tr>
            </thead>
            <tbody>
              {adminStore?.map(store => (
                <UserList
                  key={store.reportId}
                  store={store}
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

export default ReportPage;
