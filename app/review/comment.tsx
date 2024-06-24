import "./comment.scss";
import CommentList from "./commentList";

const Comment = () => {
    return (
        <div className="comment">
            <div className="commentList">
                <CommentList/>
                <CommentList/>
            </div>
            <div className="comment-write">
                <img src="../../public/asset/image/IMG_1282.jpg" alt="프로필이미지" className="profile-img"/>
                <input type="text" placeholder="댓글 달기" className="write"></input>
                <button>작성</button>
            </div>
        </div>
    );
}

export default Comment;