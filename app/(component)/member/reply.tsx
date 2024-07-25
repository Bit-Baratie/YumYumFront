import replyStyle from "@/app/(component)/member/reply.module.scss";
import userStore from "@/app/(hooks)/userStore";
import Image from "next/image";
import Link from "next/link";
import { getReplyType } from "@/app/type";
import useImage from "@/app/(hooks)/common/useImage";
import CustomImage from "../common/customImage";
import moment from "moment";
import "moment/locale/ko";

export const ReplyWrapper = ({
  myReplyList,
}: {
  myReplyList: getReplyType[];
}) => {
  return (
    <>
      {myReplyList[0] && <DashboardReply item={myReplyList[0]} />}
      {myReplyList[1] && <DashboardReply item={myReplyList[1]} />}
      {myReplyList[2] && <DashboardReply item={myReplyList[2]} />}
      {myReplyList[3] && <DashboardReply item={myReplyList[3]} />}
    </>
  );
};

const DashboardReply = ({ item }: { item: getReplyType }) => {
  return (
    <Link href={`/review/${item.reviewId}`}>
      <div className={replyStyle.dashboardItem}>{item.content}</div>
    </Link>
  );
};

export const Reply = ({ item }: { item: getReplyType }) => {
  const { userInfo } = userStore();

  return (
    <div className={replyStyle.replyContainer} key={item.replyId}>
      <CustomImage
        src={userInfo.imageUrl}
        width={100}
        height={100}
        alt=""
        style={""}
      />
      <div className={replyStyle.replyRight}>
        <span className={replyStyle.name}>{item.nickname}</span>
        <span className={replyStyle.date}>
          {moment(item.createdAt).format("YYYY년 MM월 DD일 a hh:mm")}
        </span>
        <span className={replyStyle.content}>{item.content}</span>
      </div>
    </div>
  );
};
