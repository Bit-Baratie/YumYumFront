import replyApi from "@/app/(api)/reply/replyApi";
import { getReplyType, postReplyType } from "@/app/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import UserStore from "../userStore";

const useReply = () => {
  const [content, setContent] = useState('');
  const {postReply, deleteReply, patchReply} = replyApi();
  const router = useRouter();
  const [mod, setMod] = useState(false);
  const queryClient = useQueryClient();
  const {userInfo} = UserStore();
  const createReply = useMutation({
    mutationFn:(postReplyData: postReplyType) => postReply(postReplyData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['replyList']});
      setContent('');
    },
    onError: () => 
      alert('잠시후 다시 시도해주세요')
  });
  const updateReply = useMutation({
    mutationFn:({replyId, content}:{replyId: number, content: {content: string}}) => patchReply(replyId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['replyList']});
      setContent('');
      setMod(false);
    },
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
    const patchReplyData = {
      content: content
    }
    updateReply.mutate({replyId: replyId, content: patchReplyData})
  }

  const removeReplyHandler = async (reply: getReplyType) => {
    if (userInfo.nickName !== reply.nickname) {
      alert("댓글 삭제는 작성자만 가능합니다");
      return;
    }
    removeReply.mutate(reply.replyId);
  }

  return {
    content,
    contentHandler,
    createReplyHandler,
    updateReplyHandler,
    removeReplyHandler,
    setContent,
    mod,
    setMod
  }
}

export default useReply;