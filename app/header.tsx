'use client';
import Logo from '@/public/asset/image/logo.svg';
import Bookmark from '@/public/asset/image/bookmark.svg'; //즐겨찾기
import Store from '@/public/asset/image/store.svg'; // 맛집찾기
import Logout from '@/public/asset/image/logout.svg'; // 로그아웃
import Login from '@/public/asset/image/login.svg';  // 로그인
import Mypage from '@/public/asset/image/user.svg'; // 마이페이지
import Search from '@/public/asset/image/search.svg'; //검색
import Review from '@/public/asset/image/review.svg';
import header from './header.module.scss';
import useToken from '@/app/(hooks)/common/useToken';

import Link from 'next/link';
import { useState } from 'react';
import UserStore from './(hooks)/userStore';
import useSearch from './(hooks)/common/useSearch';
import useLogin from "@/app/(hooks)/member/useLogin"

const Header = () => {
  const { keyword, inputHandler, keywordSearch } = useSearch();
  const { userInfo, token } = UserStore();
  const { authCheckStore, authCheckFavorite, authCheckReview } = useToken();
  const { logout } = useLogin();
  const [iconColor, setIconColor] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const enter = (i: number) => {
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
        <Link href={'/'}><Logo /></Link>
        <ul>
          <li onClick={authCheckStore} onMouseEnter={() => enter(0)} onMouseLeave={() => out(0)}><Store width='25' height='25' fill={iconColor[0] ? 'white' : 'black'} /><span>맛집리스트</span></li>
          <li onClick={authCheckFavorite} onMouseEnter={() => enter(1)} onMouseLeave={() => out(1)}><Bookmark width='25' height='25' fill={iconColor[1] ? 'white' : 'black'} /><span>즐겨찾기</span></li>
          <li onClick={authCheckReview} onMouseEnter={() => enter(2)} onMouseLeave={() => out(2)}><Review width='25' height='25' fill={iconColor[2] ? 'white' : 'black'} /><span>리뷰</span></li>
          {token.atk === '' && <Link href={'/member/login'}><li onMouseEnter={() => enter(3)} onMouseLeave={() => out(3)}><Login width='25' height='25' fill={iconColor[3] ? 'white' : 'black'} /><span>로그인</span></li></Link>}
          {token.atk !== '' && <Link href={{ pathname: `/member/${userInfo.memberId}` }}><li onMouseEnter={() => enter(4)} onMouseLeave={() => out(4)}><Mypage width='25' height='25' fill={iconColor[4] ? 'white' : 'black'} /><span>마이페이지</span></li></Link>}
          {token.atk !== '' && <li onClick={logout} onMouseEnter={() => enter(5)} onMouseLeave={() => out(5)}><Logout width='25' height='25' /><span>로그아웃</span></li>}
        </ul>
      </header>
      <div className={header.input}><input type='text' placeholder='지역, 음식 또는 식당명 입력' value={keyword} onChange={(e) => inputHandler(e)} onKeyDown={(e) => keywordSearch(e)} /><Search onClick={keywordSearch} /></div>
    </div>
  );
}

export default Header;