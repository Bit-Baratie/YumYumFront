import HeaderStyle from "@/app/admin/(component)/Hnf.module.scss";
import Home from "@/public/asset/image/Home.svg";
import LogOut from "@/public/asset/image/logout.svg";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.container}>
        <button>
          <Home /> HOME
        </button>
        <button>
          <LogOut width={30} height={20} /> LOGOUT
        </button>
      </div>
    </>
  );
};

export default Header;
