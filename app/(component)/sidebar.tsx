'use client'
import User from '@/public/asset/image/user.svg'
import Review from '@/public/asset/image/review.svg'
import Reply from '@/public/asset/image/replyIcon.svg'
import Like from '@/public/asset/image/heartIcon.svg'
import Bookmark from '@/public/asset/image/bookmark.svg'
import sidebarStyle from './sidebar.module.scss';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import UserStore from '../(hooks)/userStore'

const Sidebar = () => {
  const pathname = usePathname();
  const {userInfo} = UserStore();

  return (
    <ul className={sidebarStyle.sidebar}>
      <Link href={`/member/${userInfo.memberId}`}>
      <li className={pathname===`/member/${userInfo.memberId}`?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={pathname===`/member/${userInfo.memberId}`?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <User width='25' height='25' fill={pathname===`/member/${userInfo.memberId}`?'#ffb321':'black'}/>나의 정보</li>
      </Link>

      <Link href={`/member/${userInfo.memberId}/review`}>
      <li className={pathname===`/member/${userInfo.memberId}/review`?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={pathname===`/member/${userInfo.memberId}/review`?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Review width='25' height='25' fill={pathname===`/member/${userInfo.memberId}/review`?'#ffb321':'black'}/> 내가 쓴 리뷰</li>
      </Link>

      <Link href={`/member/${userInfo.memberId}/reply`}>
      <li className={pathname===`/member/${userInfo.memberId}/reply`?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={pathname===`/member/${userInfo.memberId}/reply`?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Reply width='25' height='25' fill={pathname===`/member/${userInfo.memberId}/reply`?'#ffb321':'black'}/> 내가 쓴 댓글</li>
      </Link>

      <Link href={`/member/${userInfo.memberId}/like`}>
      <li className={pathname===`/member/${userInfo.memberId}/like`?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={pathname===`/member/${userInfo.memberId}/like`?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Like width='25' height='25' fill={pathname===`/member/${userInfo.memberId}/like`?'#ffb321':'black'}/> 좋아요 한 리뷰</li>
      </Link>
      
      <Link href={`/member/${userInfo.memberId}/star`}>
      <li className={pathname===`/member/${userInfo.memberId}/star`?sidebarStyle.activeColor:sidebarStyle.nonActiveColor}>
        <span className={pathname===`/member/${userInfo.memberId}/star`?sidebarStyle.active:sidebarStyle.nonActive}></span>
        <Bookmark width='25' height='25' fill={pathname===`/member/${userInfo.memberId}/star`?'#ffb321':'black'}/> 즐겨찾기한 맛집</li>
      </Link>
    </ul>
  );
}

export default Sidebar;