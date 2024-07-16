"use client";
import React, { useState } from "react";
import "./Paging.scss";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Paging = (reportContents: any) => {
  const searchParams = useSearchParams();
  // const [page, setPage] = useState(Number(searchParams.get("pageNumber")));
  const router = useRouter();

  const handlePageChange = (page: React.SetStateAction<number>) => {
    // setPage(page);
    router.push(`/admin/review?pageNumber=${page}`);
  };

  return (
    <>
      <div>{reportContents.pageNumber}</div>
      <Pagination
        activePage={Number(searchParams.get("pageNumber"))} // 현재 페이지, 0이라서 +1
        itemsCountPerPage={5} // 한 페이지당 보여줄 리스트 아이템 개수
        totalItemsCount={30} // 총 아이템의 개수
        pageRangeDisplayed={5} // Pagination 내에서 보여줄 페이지의 범위
        prevPageText={<LeftOutlined />}
        nextPageText={<RightOutlined />}
        onChange={handlePageChange} // 페이지가 바뀔 때 핸들링해줄 함수
      />
    </>
  );
};

export default Paging;
