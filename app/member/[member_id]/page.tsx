'use client'
import MemberPageStyle from './memberPage.module.scss';
import ReviewContainer from '@/app/(component)/member/review'
import Image from 'next/image';
import useMember from '@/app/(hooks)/member/useMember'
import {ReplyWrapper} from '@/app/(component)/member/reply'
import Wrapper from '@/app/(component)/member/wrapper'
import useReview from '@/app/(hooks)/review/useReview'
import { usePathname } from 'next/navigation'
import StoreContainer from '@/app/(component)/member/store';


const Mypage = () => {
  const {profile, myReviewList, myReplyList, likeReview, likeStoreList} = useMember();
  const pathname = usePathname();

  return (
    <>
      <div className={MemberPageStyle.dashboardWrapper}>
        <div className={MemberPageStyle.dashboard}>
        {!profile ? '':
          <div className={MemberPageStyle.profile}>
            <Image src={profile.imageUrl} width={150} height={150} alt='프로필이미지' className={MemberPageStyle.profileImage}/>
            <div className={MemberPageStyle.profileInfo}>
              <span>{profile.nickName} </span>
              <span>{profile.email}</span>
              <span>{profile.phoneNumber}</span>
            </div>
          </div>}
        </div>

        <Wrapper title={'내가 쓴 리뷰'} link={`${pathname}/review`}>
          {myReviewList?<ReviewContainer myReviewList={myReviewList}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'좋아요 한 리뷰'} link={`${pathname}/like`}>
          {likeReview?<ReviewContainer myReviewList={likeReview}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'내가 쓴 댓글'} link={`${pathname}/reply`}>
          {myReplyList?<ReplyWrapper myReplyList={myReplyList}/>:'댓글이 없습니다'}
        </Wrapper>

        <Wrapper title={'즐겨찾기한 맛집'} link={`${pathname}/star`}>
          {likeStoreList?<StoreContainer likeStoreList={likeStoreList}/>:'댓글이 없습니다'}
        </Wrapper>
      </div>
    </>
  );
}

export default Mypage;