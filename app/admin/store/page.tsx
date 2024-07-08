import Logo from "@/public/asset/image/logo.svg"
import "@/app/admin/store/sideBar.scss"

const storePage = () => {
  return (
    <>
      <div className="container" />
      <div className="sideBar">
        <div className="logoAdmin">
          <div className="logo"><Logo /></div>
          <div className="adminId">Admin</div>
        </div>
        <div className="sideBarSearch">Search</div>
        <div className="sideBarMenu">
          <div className="user">사용자 관리
            <div className="userList">사용자 목록</div>
          </div>
          <div className="store">매장 관리
            <div className="storeList">매장 목록</div>
            <div className="storeReg">매장 등록</div>
            <div className="storeReport">매장 신고 목록</div>
          </div>
          <div className="review">리뷰 관리
            <div className="reiviewReport">리뷰 신고 목록</div>
          </div>
          <div className="reply">댓글 관리
            <div className="replyReport">댓글 신고 목록</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default storePage;