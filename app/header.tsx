'use client';

import Logo from '@/public/asset/image/logo.svg';
import Bookmark from '@/public/asset/image/bookmark.svg'; //즐겨찾기
import AddUser from '@/public/asset/image/signup.svg'; //회원가입
import Admin from '@/public/asset/image/admin.svg'; // 관리자
import Store from '@/public/asset/image/store.svg'; // 맛집찾기
import Logout from '@/public/asset/image/logout.svg'; // 로그아웃
import Login from '@/public/asset/image/login.svg';  // 로그인
import Mypage from '@/public/asset/image/user.svg'; // 마이페이지
import Search from '@/public/asset/image/search.svg'; //검색
import Review from '@/public/asset/image/review.svg';
import header from './header.module.scss';

import Link from 'next/link';
import List from './list';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  // const path = useRouter();

  // const user = sessionStorage.getItem('member_id');  sessionstorage에 바로 접근 불가능
  const user = typeof window !== 'undefined' ? sessionStorage.getItem('member_id') : null;
  const [iconColor, setIconColor] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const pathHandler = () => {

  }

  const enter = (i:number) => {
    iconColor[i] = true;
    setIconColor([...iconColor]);
  }

  const out = (i: number) => {
    iconColor[i] = false;
    setIconColor([...iconColor]);
  }

  return (
    <div className={header.container}>
      <header className={header.header}>
        <Logo/>
        <ul>
          <Link href={'/store'}><li onMouseEnter={() => enter(0)} onMouseLeave={() => out(0)}><Store width='25' height='25' fill={iconColor[0]?'white':'black'}/><span>맛집리스트</span></li></Link>
          <Link href={{pathname: `/member/${1}/star`}}><li onMouseEnter={() => enter(1)} onMouseLeave={() => out(1)}><Bookmark width='25' height='25' fill={iconColor[1]?'white':'black'}/><span>즐겨찾기</span></li></Link>
          <Link href={'/'}><li onMouseEnter={() => enter(2)} onMouseLeave={() => out(2)}><Review width='25' height='25' fill={iconColor[2]?'white':'black'}/><span>리뷰</span></li></Link>
          <Link href={'/member/login'}><li onMouseEnter={() => enter(3)} onMouseLeave={() => out(3)}><Login width='25' height='25' fill={iconColor[3]?'white':'black'}/><span>로그인</span></li></Link>
          {/* <Link href={'/member'}><li onMouseEnter={() => enter(4)} onMouseLeave={() => out(4)}><AddUser width='25' height='25' fill={iconColor[4]?'white':'black'}/><span>회원가입</span></li></Link> */}
          {/* <Admin/> */}
          <Link href={{ pathname: `/member/${1}`}}><li onMouseEnter={() => enter(4)} onMouseLeave={() => out(4)}><Mypage width='25' height='25' fill={iconColor[4]?'white':'black'}/><span>마이페이지</span></li></Link>
          {/* <Logout/> */}
        </ul>
      </header>
      <div className={header.input}><input type='text' placeholder='지역, 음식 또는 식당명 입력'/><Search/></div>
    </div>
  );
}

export default Header;