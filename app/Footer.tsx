import FooterStyle from "@/app/footer.module.scss";
import Logo from "@/public/asset/image/logoBlack.svg";
import { GithubFilled } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={FooterStyle.container}>
        <Logo />

        <div className={FooterStyle.text}>
          상호명 | 얌얌
          <br />
          주소 | 서울특별시 강남구 819 3 삼오빌딩 5-8층
          <br />
          이메일 | tldjs99@naver.com
          <br />
          전화 | 010-1234-5678
          <br />
          팩스 | 02-3486-9600
          <br />
          <div className={FooterStyle.bottom}>
            개인정보처리어쩌구 <br />
            이용약관 <br />
            Copyright 2024. YUMYUM. All rights reserved.
          </div>
        </div>
        <div className={FooterStyle.icon}>
          <a href="https://github.com/Bit-Baratie">
            <GithubFilled />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
