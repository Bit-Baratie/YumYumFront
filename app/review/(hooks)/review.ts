import { postReviewInfo } from "../(api)/reviewApi";

const getReviewDetail = () => {

  const getReviewDetailInfo = async () => {
  const res = await postReviewInfo();
    const nickname = res.nickname;
  }

}
