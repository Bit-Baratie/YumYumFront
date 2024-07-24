import Header from "./(component)/Header";
import NavBar from "./(component)/NavBar";
import Footer from "@/app/admin/(component)/footer";
import Style from "@/app/admin/layout.module.scss";

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
        <div className={Style.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
