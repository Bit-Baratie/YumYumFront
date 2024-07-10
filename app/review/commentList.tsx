'use client';
import { useInfiniteQuery } from "@tanstack/react-query";
import "./commentList.scss";
import Comment from "@/app/review/comment";
import replyApi from "@/app/(api)/reply/replyApi";
import { useParams } from "next/navigation";
import { getReplyType } from "../type";
import { useEffect, useRef } from "react";
import { useObserver } from "../(hooks)/common/useObserver";

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
    queryKey: ['reviewList', params],
    queryFn: ({pageParam}) => getReplyAll(Number(params.review_id), {pageNumber: pageParam}),
    initialPageParam: 0,
    getNextPageParam: (data) => {
        return data?.last? undefined: data.pageable.pageNumber+1;
    }
  });

  return (
    <>
      <div className="comment">
      <div className="commentList">
        {isFetching && <p>Loading...</p>}
        {error && <p>댓글을 불러올 수 없습니다</p>}
          {data?.pages.map((page) => (
            <>
              {page.content.map((item: getReplyType) => (
                <Comment key={item.createdAt} item={item}/> // key replyId로 바꿔야댐
              ))}
            </>
          ))}
      </div>
      <div className="comment-write">
          <img src="../../public/asset/image/IMG_1282.jpg" alt="프로필이미지" className="profile-img"/>
          <input type="text" placeholder="댓글 달기" className="write"></input>
          <button>작성</button>
      </div>
    </div>

    <div onClick={() => fetchNextPage()} className="plus">댓글 더보기</div>

    {isFetchingNextPage && <p>NextLoading...</p>}
  </>
  );
};

export default CommentList;
