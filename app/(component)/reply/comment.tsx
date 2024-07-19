import "./comment.scss";
import { getReplyType } from "../../type";
import useModal from "../../(hooks)/common/useModal";
import ReportModal from "../reportModal";
import CustomImage from "../common/customImage";
import moment from "moment";
import "moment/locale/ko";

const Comment = ({
  item,
  updateReply,
  removeReply,
}: {
  item: getReplyType;
  updateReply: Function;
  removeReply: Function;
}) => {
  const { modal, setModal, createReplyReport, contentHandler, content } =
    useModal();

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="commentContainer">
        <div className="content">
          <CustomImage
            style={"comment-img"}
            src={item.imageUrl}
            alt="프로필 이미지"
            width={30}
            height={30}
          />

          <div className="right">
            <p className="profile-name">{item.nickname}</p>
            <p className="ReplyCont">{item.content}</p>
            <p className="ReplyDate">
              {moment(item.createdAt).format("MM월 DD일 a hh:mm ")}
            </p>
          </div>
        </div>

        <div className="btn">
          <button className="dec" onClick={() => setModal(true)}></button>
          <button className="mod" onClick={() => updateReply()}></button>
          <button
            className="del"
            onClick={() => removeReply(item.replyId)}
          ></button>
        </div>
      </div>

      <hr />

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
