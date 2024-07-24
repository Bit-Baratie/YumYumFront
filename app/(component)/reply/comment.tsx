// import "./comment.scss";
// import ReplyList from "@/app/(component)/reply/comment.module.scss";
import Reply from "@/app/(component)/reply/commentList.module.scss";
import { getReplyType } from "../../type";
import useModal from "../../(hooks)/common/useModal";
import ReportModal from "../reportModal";
import CustomImage from "../common/customImage";
import moment from "moment";
import "moment/locale/ko";
import { useEffect, useState } from "react";
import useReply from "@/app/(hooks)/reply/useReply";
import UserStore from "@/app/(hooks)/userStore";

const Comment = ({
  item,
  removeReply,
}: {
  item: getReplyType;
  removeReply: Function;
}) => {
  const { modal, setModal, createReplyReport, contentHandler, content } =
    useModal();
  const {
    contentHandler: modConent,
    updateReplyHandler,
    mod,
    setMod,
  } = useReply();
  const { userInfo } = UserStore();

  const onClose = () => {
    setModal(false);
  };

  const modValidate = () => {
    if (userInfo.nickName !== item.nickname) {
      alert("댓글 수정은 작성자만 가능합니다");
      return;
    }
    setMod(!mod);
  };

  return (
    <>
      <div className={Reply.commentContainer}>
        <div className={Reply.content}>
          <CustomImage
            style={"comment-img"}
            src={item.imageUrl}
            alt="프로필 이미지"
            width={30}
            height={30}
          />

          <div className={Reply.right}>
            <p className={Reply.profileName}>{item.nickname}</p>
            <p className={Reply.ReplyCont}>{item.content}</p>
            {mod && (
              <>
                <input
                  type="text"
                  defaultValue={item.content}
                  onChange={(e) => modConent(e)}
                ></input>
                <button onClick={() => updateReplyHandler(item.replyId)}>
                  수정
                </button>
              </>
            )}
            <p className={Reply.ReplyDate}>
              {moment(item.createdAt).format("MM월 DD일 a hh:mm ")}
            </p>
          </div>
        </div>

        <div className={Reply.btn}>
          <button className={Reply.dec} onClick={() => setModal(true)}></button>
          <button className={Reply.mod} onClick={() => modValidate()}></button>
          <button
            className={Reply.del}
            onClick={() => removeReply(item.replyId)}
          ></button>
        </div>
      </div>

      <hr className={Reply.customHr} />

      {modal && (
        <ReportModal
          onClose={() => onClose()}
          targetId={item.replyId}
          createReport={createReplyReport}
          content={content}
          contentHandler={contentHandler}
        />
      )}
    </>
  );
};

export default Comment;
