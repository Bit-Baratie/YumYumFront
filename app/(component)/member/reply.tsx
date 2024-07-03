import replyStyle from '@/app/(component)/member/reply.module.scss';
import Image from 'next/image';

export const ReplyWrapper = (list: any) => {
  return (
    <>
      {/* {list.map((item: any, index: any) => {
        <DashboardReply key={index} item={item}/>
      })} */}
      {/* <DashboardReply item={list[0]}/>
      <DashboardReply item={list[1]}/>
      <DashboardReply item={list[2]}/>
      <DashboardReply item={list[3]}/> */}
      <DashboardReply/>
      <DashboardReply/>
      <DashboardReply/>
      <DashboardReply/>
    </>
  );
}

const DashboardReply = ({item}: any) => {
  return (
    <div className={replyStyle.dashboardItem}>{item}댓글아이템</div>
  );
}

interface ReplyType {
  imageUrl: string,
  nickName: string,
  createdAt: string,
  content: string,
}

export const Reply = ({ reply }: { reply: ReplyType }) => {
  
  return (
    <div className={replyStyle.replyContainer}>
      <Image src={reply.imageUrl} width={100} height={100} alt=''/>
      <div className={replyStyle.replyRight}>
        <span>{reply.nickName}</span>
        <span>{reply.createdAt}</span>
        <span>{reply.content}</span>
      </div>
    </div>
  )
}