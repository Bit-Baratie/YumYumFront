'use client'
import User from '@/public/asset/image/user.svg'
import Review from '@/public/asset/image/review.svg'
import Reply from '@/public/asset/image/user.svg'
import Like from '@/public/asset/image/user.svg'
import Bookmark from '@/public/asset/image/bookmark.svg'
import MemberPageStyle from './memberPage.module.scss';
import ReviewContainer from '@/app/(component)/member/review'
import Image from 'next/image';
import useMember from '@/app/(hooks)/member/useMember'
import {ReplyWrapper} from '@/app/(component)/member/reply'
import Wrapper from '@/app/(component)/member/wrapper'
import useReview from '@/app/(hooks)/review/useReview'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Mypage = () => {
  // const {profile, myReply, myReview, likeReview, likeStore} = useMember();
  const pathname = usePathname();

  return (
    <>
      <div className={MemberPageStyle.dashboardWrapper}>
        <div className={MemberPageStyle.dashboard}>
          <div className={MemberPageStyle.profile}>
            <Image src='/' width={150} height={150} alt='프로필이미지' className={MemberPageStyle.profileImage}/>
            <div className={MemberPageStyle.profileInfo}>
              <span>푸바오야 가지마 </span>
              <span>poobao@naver.com</span>
              <span>010-3182-9532</span>
            </div>
          </div>
        </div>

        <Wrapper title={'내가 쓴 리뷰'} link={`${pathname}/review`}>
          <ReviewContainer/>
        </Wrapper>

        <Wrapper title={'좋아요 한 리뷰'} link={`${pathname}/like`}>
          <ReviewContainer/>
        </Wrapper>

        <Wrapper title={'내가 쓴 댓글'} link={`${pathname}/reply`}>
          <ReplyWrapper/>
        </Wrapper>

        <Wrapper title={'즐겨찾기한 맛집'} link={`${pathname}/star`}>
          <ReplyWrapper/>
        </Wrapper>
      </div>
    </>
  );
}

export default Mypage;