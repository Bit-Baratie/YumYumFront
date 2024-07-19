'use client';
import { useInfiniteQuery } from "@tanstack/react-query";
import "./commentList.scss";
import Comment from "@/app/(component)/reply/comment";
import replyApi from "@/app/(api)/reply/replyApi";
import { useParams } from "next/navigation";
import { getReplyType } from "../../type";
import useReply from "../../(hooks)/reply/useReply";
import { useRef } from "react";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import CustomImage from "../common/customImage";

const CommentList = () => {
  const {getReplyAll} = replyApi();
  const params = useParams();
  const {
    data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    error
  } = useInfiniteQuery<any>({
    queryKey: ['replyList', params.review_id],
    queryFn: ({pageParam}) => getReplyAll(Number(params.review_id), {pageNumber: pageParam}),
    initialPageParam: 0,
    getNextPageParam: (data) => {
        return data?.last? undefined: data.pageNumber+1;
    }
  });
  const {content, contentHandler, createReplyHandler, removeReplyHandler, updateReplyHandler} = useReply();

  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect
  });

  return (
    <>
      <div className="comment">
      <div className="comment-write">
        <CustomImage style='profile-img' src="/asset/image/IMG_1282.jpg" alt="프로필이미지" width={40} height={40} />        
        <input type="text" value={content} onChange={(e) => contentHandler(e)} placeholder="댓글 달기" className="write"></input>
        <button onClick={() => createReplyHandler(Number(params.review_id))}>작성</button>
      </div>
      <div className="commentList">
        {isFetching && <p>Loading...</p>}
        {error && <p>댓글을 불러올 수 없습니다</p>}
          {data?.pages.map((page) => (
            <>
              {page.content.map((item: getReplyType) => (
                <Comment key={item.createdAt} item={item} updateReply={updateReplyHandler} removeReply={removeReplyHandler}/> // key replyId로 바꿔야댐
              ))}
            </>
          ))}
      </div>
      
    </div>

    <div ref={bottomRef}></div>

    {isFetchingNextPage && <p>NextLoading...</p>}
  </>
  );
};

export default CommentList;
