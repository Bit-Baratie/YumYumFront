import Header from "@/app/header";
import Sidebar from "@/app/(component)/member/sidebar";
import MemberPageStyle from './memberPage.module.scss';

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
      <Header/>
      <div className={MemberPageStyle.container}>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default layout;