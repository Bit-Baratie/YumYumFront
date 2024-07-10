'use client'
import {Reply} from '@/app/(component)/member/reply';
import useMember from '@/app/(hooks)/member/useMember';
import Link from 'next/link';

interface myReplyType {
  id: number;
  reviewId: number;
  imageUrl: string,
  nickName: string,
  createdAt: string,
  content: string,
}


const ReplyPage = () => {
  const {myReplyList} = useMember();

  return (
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
  );
}

export default ReplyPage;