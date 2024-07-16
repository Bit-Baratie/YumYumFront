import Footer from "./(component)/Footer";
import Header from "./(component)/Header";
import SideBar from "./(component)/page";
// import AdminHeader from "./(component)/adminHeader";
import Style from "@/app/admin/layout.module.scss";
import NavBar from "./(component)/NavBar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={Style.container}>
      <div className={Style.NavBar}>
        <NavBar />
      </div>
      <div className={Style.right}>
        <div className={Style.Header}>
          <Header />
        </div>
        <div className={Style.Main}>{children}</div>
      </div>
      {/* <div className={Grid.footer}><Footer /></div> */}
    </div>
  );
}
