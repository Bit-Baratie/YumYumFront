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

  const [iconColor, setIconColor] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false
  ]);

  const initColor = () => {
    const init = iconColor.map(() => false);
    setIconColor(init);
  }

  const clickHandler = (i:number) => {
    initColor();
    iconColor[i] = true;
    setIconColor([...iconColor]);
  }

  return (
    <ul className={sidebarStyle.sidebar}>
      <Link href={`/member/${1}`}>
      <li onClick={() => clickHandler(0)}><span></span><User width='25' height='25' fill={iconColor[0]?'#ffb321':'black'}/> 나의 정보</li>
      </Link>

      <Link href={`/member/${1}/review`}>
      <li onClick={() => clickHandler(1)}><span></span><Review width='25' height='25' fill={iconColor[1]?'#ffb321':'black'}/> 내가 쓴 리뷰</li>
      </Link>

      <Link href={`/member/${1}/reply`}>
      <li onClick={() => clickHandler(2)}><span></span><Reply width='25' height='25' fill={iconColor[2]?'#ffb321':'black'}/> 내가 쓴 댓글</li>
      </Link>

      <Link href={`/member/${1}/like`}>
      <li onClick={() => clickHandler(3)}><span></span><Like width='25' height='25' fill={iconColor[3]?'#ffb321':'black'}/> 좋아요 한 리뷰</li>
      </Link>
      
      <Link href={`/member/${1}/star`}>
      <li onClick={() => clickHandler(4)}><span></span><Bookmark width='25' height='25' fill={iconColor[4]?'#ffb321':'black'}/> 즐겨찾기한 맛집</li>
      </Link>
    </ul>
  );
}

export default Sidebar;