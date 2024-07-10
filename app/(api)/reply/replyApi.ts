import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth"
import { postReplyType } from "@/app/type";

const replyApi = () => {
  const {axiosWithAuth, axiosNonAuth} = useAxiosWithAuth();

  const postReply = async ({postReplyData}: {postReplyData: postReplyType} ) => {
    const result = await axiosWithAuth.post(`/reply`, postReplyData);
    return result.data;
  }

  const getReplyAll = async (reviewId: number, {pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosNonAuth.get(`/reply/${reviewId}?pageNumber=${pageNumber}`);
    return result.data;
  }

  const patchReply = async (reviewId: number, patchReplyData: string) => {
    const result = await axiosWithAuth.patch(`/reply/${reviewId}`, patchReplyData);
    return result.data;
  }

  const deleteReply = async (replyId: number) => {
    const result = await axiosWithAuth.delete(`/reply/${replyId}`);
    return result.data;
  }

  return {
    postReply,
    getReplyAll,
    patchReply,
    deleteReply
  }
}

export default replyApi;