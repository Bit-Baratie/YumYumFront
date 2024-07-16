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

  const getReviewReport = async (pageNumber:number) => {
    const result = await axiosWithAuth.get(`/report/review?pageNumber=${pageNumber}`);
    console.log(result)
    return result.data;
  }

  const getCommentReport = async () => {
    const result = await axiosWithAuth.get("/report/reply");
    console.log(result)
    return result.data;
  }

  // const getCommentReport = async (page: any, itemsPerPage: any) => {
  //   // 페이지와 항목 수에 맞게 데이터를 가져오는 로직을 추가합니다.
  //   const result = await axiosWithAuth.fetch(`/api/comments?page=${page}&size=${itemsPerPage}`);
  //   console.log(result);
  //   return result.data;
  // };
  

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

  const deleteUser = async (memberId:number) => {
    const result = await axiosWithAuth.delete(`/admin/${memberId}`); 
    console.log(result)
    return result;
  }

  const deleteReview = async () => {
    const result = await axiosWithAuth.delete("/report/review");
    console.log(result)
    return result;
  }

  const deleteComment = async () => {
    const result = await axiosWithAuth.delete("/report/reply");
    console.log(result)
    return result;
  }
  


  return {
    getReviewReport,
    getCommentReport,
    getuserAll,
    getStoreList,
    getStoreReport,
    deleteUser,
    deleteReview,
    deleteComment
  }
}

export default AdminApi;