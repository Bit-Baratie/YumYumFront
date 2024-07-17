'use client'
import {Reply} from '@/app/(component)/member/reply';
import { useObserver } from '@/app/(hooks)/common/useObserver';
import useMember from '@/app/(hooks)/member/useMember';
import Link from 'next/link';
import { useRef } from 'react';
import { getReplyType } from '@/app/type';

const ReplyPage = () => {
  const {myReplyList, nextMyReplyList} = useMember();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && nextMyReplyList();

  useObserver({
    target: bottomRef,
    onIntersect
  });
  
  return (
    <>
      <div>
        {myReplyList?.pages.map((page) => (
          <div key={page}>
            {page.content.map((item: getReplyType) => (
              <Link href={`/review/${item.reviewId}`} key={item.replyId}>
                <Reply item={item} key={item.replyId}/>
              </Link>
            ))}
          </div>
        ))}
      </div>
      
      <div ref={bottomRef}></div>
    </>
  );
}

export default ReplyPage;