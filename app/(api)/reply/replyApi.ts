import {axiosNonAuth, axiosWithAuth} from "@/app/(hooks)/common/axiosWithAuth"
import { postReplyType } from "@/app/type";

const replyApi = () => {
  const postReply = async (postReplyData: postReplyType) => {
    const result = await axiosWithAuth.post(`/reply`, postReplyData);
    return result;
  }

  const getReplyAll = async (reviewId: number, {pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosNonAuth.get(`/reply/${reviewId}?page=${pageNumber}`);
    return result.data;
  }

  const patchReply = async (reviewId: number, content: {content: string}) => {
    const result = await axiosWithAuth.patch(`/reply/${reviewId}`, content);
    return result;
  }

  const deleteReply = async (replyId: number) => {
    const result = await axiosWithAuth.delete(`/reply/${replyId}`);
    return result;
  }

  return {
    postReply,
    getReplyAll,
    patchReply,
    deleteReply
  }
}

export default replyApi;