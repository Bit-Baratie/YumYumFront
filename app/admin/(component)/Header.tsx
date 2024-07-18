'use client';
import useLogin from "@/app/(hooks)/member/useLogin";
import HeaderStyle from "@/app/admin/(component)/Hnf.module.scss";
import Home from "@/public/asset/image/Home.svg";
import LogOut from "@/public/asset/image/logout.svg";
import Link from "next/link";

const Header = () => {
  const { logout } = useLogin();

  return (
    <>
      <div className={HeaderStyle.container}>
        <Link href={"/home"}>
          <button>
            <Home /> HOME
          </button>
        </Link>
        <button onClick={logout}>
          <LogOut width={30} height={20} /> LOGOUT
        </button>
      </div>
    </>
  );
};

export default Header;
