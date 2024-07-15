import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";

interface Report {
  id: string;
  // type: string; // 댓글, 리뷰, 맛집
  reportedContent: string; // 신고된 내용
  reportedId: string; // 신고된 id
  reportedReason: string; // 신고 이유
  reporterId: string; // 신고자 id
  reporter: string; //신고자 닉네임
}

interface ReportType {
  comment: string;
  review: string;
  user: string;
}


const AdminApi = () => {
  const { axiosWithAuth } = useAxiosWithAuth();

  const getReviewReport = async () => {
    const result = await axiosWithAuth.get("/report/review");
    console.log(result)
    return result.data;
  }

  const getCommentReport = async () => {
    const result = await axiosWithAuth.get("/report/reply");
    console.log(result)
    return result.data;
  }

  const getuserAll = async () => {
    const result = await axiosWithAuth.get("/admin/member");
    console.log(result)
    return result.data;
  }
  const getStoreList = async () => {
    const result = await axiosWithAuth.get("/store/admin");
    console.log(result)
    return result.data;
  }
  const getStoreReport = async () => {
    const result = await axiosWithAuth.get("/report/store");
    console.log(result)
    return result.data;
  }

  return {
    getReviewReport,
    getCommentReport,
    getuserAll,
    getStoreList,
    getStoreReport
  }
}

export default AdminApi;