import style from '@/app/member/login/layout.module.scss';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={style.container}>
        {children}
      </div>    
    );
  }