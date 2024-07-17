"use client";

import Header from "@/app/header";
import UserList from "./userList";
import { useEffect, useState } from "react";
import adminApi from "@/app/(api)/admin/adminApi";
import AdminStyle from "@/app/admin/admin.module.scss";
import Search from "../(component)/Search";
import AdminApi from "@/app/(api)/admin/adminApi";
import Paging from "../(component)/pagenation";
import "./../(component)/Paging.scss";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Loading from "@/app/admin/(component)/Loading";

interface UserData {
  memberId: string;
  reviewId: number;
  email: string;
  isDeleted: boolean;
  nickname: string;
  phoneNumber: string;
}

const userPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userCheck, setUserCheck] = useState<Array<UserData>>([]);
  const [loading, setLoading] = useState(true);
  const { getuserAll } = AdminApi();

  useEffect(() => {
    fetchUserCheck();
  }, [page, totalPages]);

  const fetchUserCheck = async () => {
    const result = await getuserAll(page - 1);
    setUserCheck(result.content);
    setTotalPages(result.totalElements);
    setLoading(false);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    console.log(page);
  };

  // const handlePageChange = (page: React.SetStateAction<number>) => {
  //   setPage(page);
  //   console.log(page);
  // };

  return (
    <div className={AdminStyle.container}>
      <div className={AdminStyle.pAndSearch}>
        <p className={AdminStyle.pStyle}>사용자 목록</p>
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
                <th className={AdminStyle.reviewContent}>이메일</th>
                <th className={AdminStyle.reportContent}>연락처</th>
                <th className={AdminStyle.date}>상태</th>
              </tr>
            </thead>
            <tbody>
              {/* {userCheck.map((userData, index) => (
            <UserList key={index} userData={userData} />
          ))} */}
              {userCheck.map((userData: UserData) => (
                <UserList key={userData.memberId} userData={userData} />
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

export default userPage;
