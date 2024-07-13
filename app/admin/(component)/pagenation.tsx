import React, { useState } from "react";
import "./Paging.scss";
import Pagination from "react-js-pagination";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    console.log(page);
  };

  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={10} // 한 페이지당 보여줄 리스트 아이템 개수
      totalItemsCount={450} // 총 아이템의 개수
      pageRangeDisplayed={5} // Pagination 내에서 보여줄 페이지의 범위
      prevPageText={<LeftOutlined />}
      nextPageText={<RightOutlined />}
      onChange={handlePageChange} // 페이지가 바뀔 때 핸들링해줄 함수
    />
  );
};

export default Paging;
