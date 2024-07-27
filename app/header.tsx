'use client';
import Logo from '@/public/asset/image/logo.svg';
import Bookmark from '@/public/asset/image/bookmark.svg'; //즐겨찾기
import Store from '@/public/asset/image/store.svg'; // 맛집찾기
import Logout from '@/public/asset/image/logout.svg'; // 로그아웃
import Login from '@/public/asset/image/login.svg';  // 로그인
import Mypage from '@/public/asset/image/user.svg'; // 마이페이지
import Search from '@/public/asset/image/search.svg'; //검색
import Review from '@/public/asset/image/review.svg';
import Reply from '@/public/asset/image/replyIcon.svg';
import Hamburger from '@/public/asset/image/hamburger.svg';
import header from './header.module.scss';
import useToken from '@/app/(hooks)/common/useToken';

import Link from 'next/link';
import { useState } from 'react';
import UserStore from './(hooks)/userStore';
import useSearch from './(hooks)/common/useSearch';
import useLogin from "@/app/(hooks)/member/useLogin"
import Sidebar from './(component)/member/sidebar';
import CustomImage from './(component)/common/customImage';
import { HeartFilled } from '@ant-design/icons';

const Header = () => {
  const { keyword, inputHandler, keywordSearch } = useSearch();
  const { userInfo, token } = UserStore();
  const { authCheckStore, authCheckFavorite, authCheckReview } = useToken();
  const { logout } = useLogin();
  const [sideHeader, setSideHeader] = useState(false);

  return (
    <>
    <div className={header.container}>
      <header className={header.header}>
        <Link href={'/'}><Logo /></Link>
        <ul>
        <Link href={`/store`}><li><Store width='25' height='25' fill={'black'} /><span>맛집리스트</span></li></Link>
          <Link href={`/member/${userInfo.memberId}/star`}><li><Bookmark width='25' height='25' fill={'black'} /><span>즐겨찾기</span></li></Link>
          <Link href={`/review`}><li><Review width='25' height='25' fill={'black'} /><span>리뷰</span></li></Link>
          {token.atk === '' && <Link href={'/member/login'}><li><Login width='25' height='25' fill={'black'} /><span>로그인</span></li></Link>}
          {token.atk !== '' && <Link href={{ pathname: `/member/${userInfo.memberId}` }}><li><Mypage width='25' height='25' fill={'black'} /><span>마이페이지</span></li></Link>}
          {token.atk !== '' && <li onClick={logout}><Logout width='25' height='25' fill={'black'}/><span>로그아웃</span></li>}
        </ul>
      </header>

      {sideHeader &&
      <header className={header.mobileHeader}>
          <div className={header.profile}>
          {token.atk !== '' ?
          <>
          <CustomImage src={userInfo.imageUrl} width={100} height={100} alt='프로필' style={''}/>
          <span>{userInfo.nickName}</span></>:
          <>
          <Mypage width='50' height='50' fill={'black'}/>
          <span>로그인이 필요합니다</span></>}
          </div>
        <ul>
        {token.atk === '' && <li><Link href={'/member/login'}><Login width='25' height='25' fill={'black'} /><span>로그인</span></Link></li>}
        {token.atk !== '' && <li onClick={logout}><Logout width='25' height='25' fill={'black'}/><span>로그아웃</span></li>}
          <li><Link href={`/member/${userInfo.memberId}/like`}><Bookmark width='25' height='25' fill={'black'} /><span>즐겨찾기</span></Link></li>
          <li><Link href={`/review`}><Review width='25' height='25' fill={'black'} /><span>리뷰</span></Link></li>

          <div className={header.moblieMypage}>마이페이지</div>
          <li><Link href={{ pathname: `/member/${userInfo.memberId}` }}><Mypage width='25' height='25' fill={'black'} /><span>나의정보</span></Link></li>
          <li><Link href={{ pathname: `/member/${userInfo.memberId}/review` }}><Review width='25' height='25' fill={'black'} /><span>내가 쓴 리뷰</span></Link></li>
          <li><Link href={{ pathname: `/member/${userInfo.memberId}/reply` }}><Reply width='25' height='25' fill={'black'} /><span>내가 쓴 댓글</span></Link></li>
          <li><Link href={{ pathname: `/member/${userInfo.memberId}/like` }}><HeartFilled width='50' height='50'  /><span>좋아요 한 리뷰</span></Link></li>
        </ul>
      </header>}

      <div className={header.input}><input type='text' placeholder='지역, 음식 또는 식당명 입력' value={keyword} onChange={(e) => inputHandler(e)} onKeyDown={(e) => keywordSearch(e)} /><Search onClick={keywordSearch} /></div>
    </div>
    {sideHeader?
      <div className={header.xButton} onClick={()=>setSideHeader(false)}>X</div>:
      <Hamburger className={header.hamburger} onClick={()=>setSideHeader(true)}/>
    }
    </>
  );
}

export default Header;