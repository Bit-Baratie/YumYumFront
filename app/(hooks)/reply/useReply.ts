import replyApi from "@/app/(api)/reply/replyApi";
import { postReplyType } from "@/app/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const useReply = () => {
  const [content, setContent] = useState('');
  const {postReply, deleteReply, patchReply} = replyApi();
  const router = useRouter();
  const queryClient = useQueryClient();
  const createReply = useMutation({
    mutationFn:(postReplyData: postReplyType) => postReply(postReplyData),
    onSuccess: () => 
      queryClient.invalidateQueries({queryKey:['replyList']}),
    onError: () => 
      alert('잠시후 다시 시도해주세요')
  });
  const updateReply = useMutation({
    mutationFn:({replyId, patchReplyData}:{replyId: number, patchReplyData: string}) => patchReply(replyId, patchReplyData),
    onSuccess: () => 
      queryClient.invalidateQueries({queryKey:['replyList']}),
    onError: () => 
      alert('잠시후 다시 시도해주세요')
  });
  const removeReply = useMutation({
    mutationFn: (replyId: number) => deleteReply(replyId),
    onSuccess: () => 
      queryClient.invalidateQueries({queryKey:['replyList']}),
    onError: () => 
      alert('잠시후 다시 시도해주세요')
  });

  const contentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const createReplyHandler = async (reviewId: number) => {
    const postReplyData = {
      reviewId: reviewId,
      content: content
    };

    createReply.mutate(postReplyData);
  }

  const updateReplyHandler = (replyId:number) => {
    updateReply.mutate({replyId: replyId, patchReplyData: content})
  }

  const removeReplyHandler = async (replyId: number) => {
    removeReply.mutate(replyId);
  }

  return {
    content,
    contentHandler,
    createReplyHandler,
    updateReplyHandler,
    removeReplyHandler
  }
}

export default useReply;