'use client'
import {Reply} from '@/app/(component)/member/reply';
import useMember from '@/app/(hooks)/member/useMember';

const ReplyPage = () => {
  const {myReply} = useMember();
  
  return (
    (myReply !== undefined ? 
    <div>
      <Reply reply={myReply}/>
    </div> :<div>댓글이 없습니다.</div>)
    
  );
}

export default ReplyPage;