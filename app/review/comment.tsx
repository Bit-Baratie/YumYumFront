import "./comment.scss";
import { getReplyType } from "../type";

const Comment = ({item}: {item: getReplyType}) => {
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
                <button className="dec"></button>
                <button className="mod"></button>
                <button className="del"></button>
            </div>
            </div>

            <hr />
        </>
    );
}

export default Comment;