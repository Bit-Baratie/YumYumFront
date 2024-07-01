'use client'
import User from '@/public/asset/image/user.svg'
import Review from '@/public/asset/image/review.svg'
import Reply from '@/public/asset/image/user.svg'
import Like from '@/public/asset/image/user.svg'
import Bookmark from '@/public/asset/image/bookmark.svg'
import MemberPageStyle from './memberPage.module.scss';
import { ReviewContainer } from '@/app/(component)/reviewItem'
import Image from 'next/image';
import useMember from '@/app/(hooks)/member/useMember'
import {ReplyWrapper} from '@/app/(component)/member/dashboardReply'

const Mypage = () => {
  // const {profile, myReply, myReview, likeReview, likeStore} = useMember();

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
        
        <div className={MemberPageStyle.dashboard}>
            <span className={MemberPageStyle.title}>내가 쓴 리뷰</span>
            {<ReviewContainer/>}
        </div>

        <div className={MemberPageStyle.dashboard}>
          <span className={MemberPageStyle.title}>좋아요 한 리뷰</span>
          <ReviewContainer/>
        </div>

        <div className={MemberPageStyle.dashboard}>
          <span className={MemberPageStyle.title}>내가 쓴 댓글</span>
          <ReplyWrapper/>
        </div>

        <div className={MemberPageStyle.dashboard}>
          <span className={MemberPageStyle.title}>즐겨찾기한 맛집</span>

        </div>
      </div>
    </>
  );
}

export default Mypage;