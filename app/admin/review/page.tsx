import Search from "../search";
import ReviewList from "./reviewList";
import "./reviewList.scss";

const reviewPage = () => {
  return ( 
    <>
      <Search/>
      <table>

        <tr>
            <th className="nickname">닉네임</th>
            <th className="reviewContent">리뷰 내용</th>
            <th className="reportContent">신고 내용</th>
            <th className="date">작성일자</th>
        </tr>

        <ReviewList/>
        <ReviewList/>

      </table>
    </>
  );
}

export default reviewPage;