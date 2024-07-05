import "./commentList.scss";

const CommentList = () => {
  return (
    <>
      <div className="commentContainer">
        <div className="content">
          <img src="" alt="프로필 이미지" className="comment-img" />

          <div className="right">
            <p className="profile-name">귀여운 닥스훈트</p>
            <p>맛있겠다 헐~ 쥐져스 크라이스트</p>
            <p>2020.20.20</p>
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
};

export default CommentList;
