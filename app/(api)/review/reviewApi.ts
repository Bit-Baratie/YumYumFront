import axios from "axios"


export const getReviewAll = async () => {
  const result = await axios.get("https://localhost:3000/review")
  .then ((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해 주세요');
  });

  return result;
}

export const getReviewOne = async (reviewId:number, storeId:number) => {
  const result = await axios.get(`https://localhost:3000/${storeId}/review/${reviewId}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해 주세요');
  });

  return result;
}


interface PostReview {
  storeId: number;
  content: string;
  grade: number;
  memberId: number;
}

export const postReview = async (postReviewData: PostReview) => {
  const result = await axios.post('https://localhost:3000/review', postReviewData)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
    alert('잠시후 다시 시도해 주세요');
  });

  return result;
}
