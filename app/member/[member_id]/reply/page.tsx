'use client'
import {Reply} from '@/app/(component)/member/reply';
import useMember from '@/app/(hooks)/member/useMember';

interface myReplyType {
  id: number;
  imageUrl: string,
  nickName: string,
  createdAt: string,
  content: string,
}


const ReplyPage = () => {
  const {myReplyList} = useMember();

  return (
    <>
      {myReplyList !== undefined ? 
      <div>
        <Reply myReplyList={myReplyList.content}/>
      </div> :<div>댓글이 없습니다.</div>}
    </>
  );
}

export default ReplyPage;