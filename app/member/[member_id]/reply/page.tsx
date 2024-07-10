'use client'
import {Reply} from '@/app/(component)/member/reply';
import { useObserver } from '@/app/(hooks)/common/useObserver';
import useMember from '@/app/(hooks)/member/useMember';
import Link from 'next/link';
import { useRef } from 'react';

interface myReplyType {
  id: number;
  reviewId: number;
  imageUrl: string,
  nickName: string,
  createdAt: string,
  content: string,
}


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
          <>
            {page.content.map((item: myReplyType) => (
              <Link href={`/review/${item.reviewId}`}>
                <Reply item={item}/>
              </Link>
            ))}
          </>
        ))}
      </div>
      
      <div ref={bottomRef}></div>
    </>
  );
}

export default ReplyPage;