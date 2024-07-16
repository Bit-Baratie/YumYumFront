import "./comment.scss";
import { getReplyType } from "../../type";
import useModal from "../../(hooks)/common/useModal";
import ReportModal from "../reportModal";

const Comment = ({item, updateReply, removeReply}: {item: getReplyType, updateReply: Function, removeReply: Function}) => {
    const {modal, setModal, createReplyReport, contentHandler, content} = useModal();

    const onClose = () => {
        setModal(false);
    }

    return (
        <>
            <div className="commentContainer">
            <div className="content">
                <img src="" alt="프로필 이미지" className="comment-img" />

                <div className="right">
                <p className="profile-name">{item.nickName}</p>
                <p>{item.content}</p>
                <p>{item.createdAt}</p>
                </div>
            </div>

            <div className="btn">
                <button className="dec" onClick={() => setModal(true)}></button>
                <button className="mod" onClick={() => updateReply()}></button>
                <button className="del" onClick={() => removeReply(item.replyId)}></button>
            </div>
            </div>

            <hr />

            {modal && <ReportModal onClose={() => onClose()} targetId={item.replyId} createReport={createReplyReport} content={content} contentHandler={contentHandler}/>}
        </>
    );
}

export default Comment;