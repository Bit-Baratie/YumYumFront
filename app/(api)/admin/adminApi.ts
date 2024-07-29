import { axiosWithAuth } from "@/app/(hooks)/common/axiosWithAuth";

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
  const getReviewReport = async (page: number) => {
    const result = await axiosWithAuth.get(`/report/review?page=${page}`);
    console.log(result)
    return result.data;
  }

  const getCommentReport = async (page: number) => {
    const result = await axiosWithAuth.get(`/report/reply?page=${page}`);
    console.log(result)
    return result.data;
  }

  // const getCommentReport = async (page: any, itemsPerPage: any) => {
  //   // 페이지와 항목 수에 맞게 데이터를 가져오는 로직을 추가합니다.
  //   const result = await axiosWithAuth.fetch(`/api/comments?page=${page}&size=${itemsPerPage}`);
  //   console.log(result);
  //   return result.data;
  // };


  const getuserAll = async (page: number) => {
    const result = await axiosWithAuth.get(`/admin/member?page=${page}`);
    console.log(result)
    return result.data;
  }
  const getStoreList = async (page: number) => {
    const result = await axiosWithAuth.get(`/admin/store?page=${page}`);
    console.log(result)
    return result.data;
  }
  const getStoreReport = async (page: number) => {
    const result = await axiosWithAuth.get(`/report/store?page=${page}`);
    console.log(result)
    return result.data;
  }

  const deleteUser = async (memberId: number) => {
    const result = await axiosWithAuth.delete(`/admin/member/${memberId}`);
    console.log(result)
    return result;
  }

  const deleteReview = async (reviewId: number) => {
    const result = await axiosWithAuth.delete(`/admin/review/${reviewId}`);
    console.log(result)
    return result;
  }

  const deleteComment = async (replyId: number) => {
    const result = await axiosWithAuth.delete(`/admin/reply/${replyId}`);
    console.log(result)
    return result;
  }
  const deleteStore = async (storeId: number) => {
    const result = await axiosWithAuth.delete(`/admin/store/${storeId}`);
    console.log(result)
    return result;
  }

  const registerStore = async (formData: FormData) => {
    const result = await axiosWithAuth.post("/store", formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch((err: { message: any; }) => {
        alert(err.message);
      });
    return result;
  }

  const modifyStore = async (formData: FormData, storeId: number) => {
    const result = await axiosWithAuth.patch(`/store/${storeId}`, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch((err: { message: any; }) => {
        alert(err.message);
      });
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
    deleteComment,
    registerStore,
    deleteStore,
    modifyStore
  }
}

export default AdminApi;
