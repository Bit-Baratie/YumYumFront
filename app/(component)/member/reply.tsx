import replyStyle from '@/app/(component)/member/reply.module.scss';
import userStore from '@/app/(hooks)/userStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface myReplyType {
  id: number;
  reviewId: number,
  nickName: string,
  createdAt: string,
  content: string,
}

export const ReplyWrapper = ({myReplyList}: {myReplyList: myReplyType[]}) => {
  return (
    <>
      <DashboardReply item={myReplyList[0]}/>
      <DashboardReply item={myReplyList[1]}/>
      <DashboardReply item={myReplyList[2]}/>
      <DashboardReply item={myReplyList[3]}/>
    </>
  );
}

const DashboardReply = ({item}: {item: myReplyType}) => {
  return (
    <div className={replyStyle.dashboardItem}>{item.content}</div>
  );
}

export const Reply = ({ myReplyList }: { myReplyList: myReplyType[] }) => {
  const {userInfo} = userStore();

  return (
    <>
      {myReplyList?.map((item) => {
        return(
          <Link href={`/review/${item.reviewId}`}>
            <div className={replyStyle.replyContainer} key={item.id}>
              <Image src={userInfo.profileUrl} width={100} height={100} alt=''/>
              <div className={replyStyle.replyRight}>
                <span>{item.nickName}</span>
                <span>{item.createdAt}</span>
                <span>{item.content}</span>
              </div>
            </div>
          </Link>
          )
      })}
    </>
  )
}

