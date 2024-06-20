import '@/app/test/layout.scss';
import Script from "next/script";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='container'>
        <Script strategy='beforeInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=x4wkjym4qv"/>
        {children}
      </div>    
    );
  }