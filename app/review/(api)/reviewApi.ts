import axios from "axios";

export const postReviewInfo = async () => {
  const result = await axios.get('https://localhost:3000', {
  params: {
    store_id: 1,
    review_id: 1
  }
  })
  .then ((res) => {
    return res.data;
  })
  
  return result;
}
