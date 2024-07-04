import replyStyle from '@/app/(component)/member/reply.module.scss';
import Image from 'next/image';

interface myReplyType {
  imageUrl: string,
  nickName: string,
  createdAt: string,
  content: string,
}

export const ReplyWrapper = ({myReplyList}: {myReplyList: myReplyType[]}) => {
  return (
    <>
      {/* {list.map((item: any, index: any) => {
        <DashboardReply key={index} item={item}/>
      })} */}
      {/* <DashboardReply item={list[0]}/>
      <DashboardReply item={list[1]}/>
      <DashboardReply item={list[2]}/>
      <DashboardReply item={list[3]}/> */}

      {myReplyList.map((item) => {
        return(<DashboardReply key={item.createdAt} item={item}/>)
      })}
    </>
  );
}

const DashboardReply = ({item}: {item: myReplyType}) => {
  return (
    <div className={replyStyle.dashboardItem}>{item.content}</div>
  );
}

export const Reply = ({ myReplyList }: { myReplyList: myReplyType[] }) => {
  
  return (
    <div className={replyStyle.replyContainer}>
      {myReplyList.map((item) => {
        return(
          <>
            <Image src={item.imageUrl} width={100} height={100} alt='' key={item.createdAt}/>
            <div className={replyStyle.replyRight}>
              <span>{item.nickName}</span>
              <span>{item.createdAt}</span>
              <span>{item.content}</span>
            </div>
          </>)
      })}
    </div>
  )
}