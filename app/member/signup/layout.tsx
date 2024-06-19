import '@/app/member/signup/layout.scss';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='container'>
        {children}
      </div>    
    );
  }