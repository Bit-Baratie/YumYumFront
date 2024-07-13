// import NavStyle from
import Logo from "@/public/asset/image/logoBlack.svg";
import NavStyle from "@/app/admin/(component)/NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <div className={NavStyle.container} />
      <div className={NavStyle.sideBar}>
        <div className={NavStyle.logoAdmin}>
          <div className={NavStyle.logo}>
            <Logo style={{}} />
          </div>
          <div className={NavStyle.adminId}>Admin</div>
        </div>
        <div className={NavStyle.sideBarSearch}>Search</div>
        <div className={NavStyle.sideBarMenu}>
          <div className={NavStyle.user}>
            사용자 관리
            <div className={NavStyle.userList}>사용자 목록</div>
          </div>
          <div className={NavStyle.store}>
            매장 관리
            <div className={NavStyle.storeList}>매장 목록</div>
            <div className={NavStyle.storeReg}>매장 등록</div>
            <div className={NavStyle.storeReport}>매장 신고 목록</div>
          </div>
          <div className={NavStyle.review}>
            리뷰 관리
            <div className={NavStyle.reiviewReport}>리뷰 신고 목록</div>
          </div>
          <div className={NavStyle.reply}>
            댓글 관리
            <div className={NavStyle.replyReport}>댓글 신고 목록</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
