import HeaderStyle from "@/app/admin/(component)/Hnf.module.scss";
import Home from "@/public/asset/image/Home.svg";
import LogOut from "@/public/asset/image/logout.svg";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.container}>
        <Link href={"/home"}>
          <button>
            <Home /> HOME
          </button>
        </Link>
        <button>
          <Link href="/home">
            <LogOut width={30} height={20} /> LOGOUT
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header;
