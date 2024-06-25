import "./reviewList.scss";

const ReviewList = () => {
  return ( 
    <>
        <td className="nickname">김시언</td>
        <td className="reviewContent">여기 노맛</td>
        <td className="reportContent">불쾌감</td>
        <td className="date"> 2020.20.20 <button>X</button> </td>
    </>
  );
}

export default ReviewList;