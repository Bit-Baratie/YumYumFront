import replyApi from "@/app/(api)/reply/replyApi";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const useReply = () => {
  const [content, setContent] = useState('');
  const {postReply, deleteReply, patchReply} = replyApi();
  const router = useRouter();

  const contentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const createReply = async (reviewId: number) => {
    const postReplyData = {
      reviewId: reviewId,
      content: content
    };

    const result = await postReply({postReplyData});
    if (result.status === 201) {
      router.refresh();
    } else {
      alert('잠시후 다시 시도해주세요'+result.error);
    }
  }

  const updateReply = (replyId:number) => {

  }

  const removeReply = async (replyId: number) => {
    const result = await deleteReply(replyId);
    if (result.status === 204) {
      alert('댓글이 삭제되었습니다');
    } else {
      alert('잠시후 다시 시도해주세요'+result.error);
    }
  }

  return {
    content,
    contentHandler,
    createReply,
    updateReply,
    removeReply
  }
}

export default useReply;