import "./reviewList.scss";

const ReviewList = () => {
  return ( 

    <tr className="list">
        <td className="nickname">권재원</td>
        <td className="reviewContent">너 기억력 어떻게 된거야??너 기억력 어떻게 된거야?? 너 기억력 어떻게 된거야??너 기억력 어떻게 된거야??</td>
        <td className="reportContent">불쾌감</td> 
        <td className="date"> 2020.20.20 <button>X</button> </td>
    </tr>
  );
}

export default ReviewList;