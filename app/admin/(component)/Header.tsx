import HeaderStyle from "@/app/admin/(component)/Hnf.module.scss";
import Home from "@/public/asset/image/Home.svg";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.container}>
        <button>
          <Home /> HOME
        </button>
      </div>
    </>
  );
};

export default Header;
