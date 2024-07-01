'use client'
import User from '@/public/asset/image/user.svg'
import Review from '@/public/asset/image/review.svg'
import Reply from '@/public/asset/image/user.svg'
import Like from '@/public/asset/image/user.svg'
import Bookmark from '@/public/asset/image/bookmark.svg'
import sidebarStyle from './sidebar.module.scss';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Sidebar = () => {
  // const pathname = usePathname();
  // const dashRegex = '^/member/\d+/$';  // 각 경로에 대한 정규표현식
  // const reviewRegex = /member+[/]+\d+[/]+review/;
  // const replyRegex = /member+[/]+\d+[/]+reply/;
  // const likeRegex = /member+[/]+\d+[/]+like/;
  // const starRegex = /member+[/]+\d+[/]+star/;

  const [active, setActive] = useState<number>(0);

  const clickHandler = (i:number) => {
    setActive(i);
  }

  return (
    <ul className={sidebarStyle.sidebar}>
      <Link href={`/member/${1}`}>
      <li onClick={() => clickHandler(0)} className={active===0?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={active===0?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <User width='25' height='25' fill={active===0?'#ffb321':'black'}/>나의 정보</li>
      </Link>

      <Link href={`/member/${1}/review`}>
      <li onClick={() => clickHandler(1)} className={active===1?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={active===1?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Review width='25' height='25' fill={active===1?'#ffb321':'black'}/> 내가 쓴 리뷰</li>
      </Link>

      <Link href={`/member/${1}/reply`}>
      <li onClick={() => clickHandler(2)} className={active===2?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={active===2?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Reply width='25' height='25' fill={active===2?'#ffb321':'black'}/> 내가 쓴 댓글</li>
      </Link>

      <Link href={`/member/${1}/like`}>
      <li onClick={() => clickHandler(3)} className={active===3?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={active===3?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Like width='25' height='25' fill={active===3?'#ffb321':'black'}/> 좋아요 한 리뷰</li>
      </Link>
      
      <Link href={`/member/${1}/star`}>
      <li onClick={() => clickHandler(4)} className={active===4?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={active===4?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Bookmark width='25' height='25' fill={active===4?'#ffb321':'black'}/> 즐겨찾기한 맛집</li>
      </Link>
    </ul>
  );
}

export default Sidebar;