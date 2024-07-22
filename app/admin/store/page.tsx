'use client'
import Header from "@/app/header";
import "@/app/admin/comment/comment.module.scss";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "@/app/admin/(component)/Search";
import StoreList from "@/app/admin/store/storeList";
// import SideBar from "../sidebar";
// import SideBar from "../(component)/sideBar";
import { adminStoreType } from "@/app/type";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "@/app/admin/(component)/Paging.scss"
import Loading from "../(component)/Loading";

const Store = () => {
  const [adminStore, setAdminStore] = useState<Array<adminStoreType>>();
  const { getStoreList } = adminApi();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const fetchAdminStore = async () => {
      const result = await getStoreList(page - 1);
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
        <p className={AdminStyle.pStyle}>매장 목록</p>
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
                <th className={AdminStyle.nickname}>매장</th>
                <th className={AdminStyle.reviewContent}>주소</th>
                <th className={AdminStyle.reportContent}>연락처</th>
                <th className={AdminStyle.date}>상태</th>
              </tr>
            </thead>
            <tbody>
              {adminStore?.map(store => (
                <StoreList
                  key={store.storeId}
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

export default Store;
