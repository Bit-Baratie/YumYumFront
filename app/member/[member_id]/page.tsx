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
import Modal from '@/app/(component)/member/modal';
import { GetServerSideProps } from 'next';
import useSearch from '@/app/(hooks)/common/useSearch';
import { useState } from 'react';

const Mypage = () => {
  const {profile, 
    myReviewList, 
    myReplyList, 
    likeReview,
    likeStoreList,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateMember,
    nickName,
    phone} = useMember();
  const pathname = usePathname();
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={MemberPageStyle.dashboardWrapper}>
        <div className={MemberPageStyle.dashboard}>
        {!profile ? '회원정보가 없습니다':
        <>
          <div className={MemberPageStyle.profile}>
            <Image src={'/'} width={150} height={150} alt='프로필이미지' className={MemberPageStyle.profileImage}/>
            <div className={MemberPageStyle.profileInfo}>
              <span>{profile.nickName} <span onClick={() => setModal(!modal)}>연필</span></span>
              <span>{profile.email}</span>
              <span>{profile.phoneNumber}</span>
            </div>
          </div>
          <button>회원탈퇴</button>
          </>
          }
          
        </div>

        <Wrapper title={'내가 쓴 리뷰'} link={`${pathname}/review`}>
          {myReviewList?<ReviewContainer myReviewList={myReviewList}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'좋아요 한 리뷰'} link={`${pathname}/like`} totalCnt={likeReview?.numberOfElements}>
          {likeReview?<ReviewContainer myReviewList={likeReview.content}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'내가 쓴 댓글'} link={`${pathname}/reply`} totalCnt={myReplyList?.numberOfElements}>
          {myReplyList?<ReplyWrapper myReplyList={myReplyList.content}/>:'댓글이 없습니다'}
        </Wrapper>

        <Wrapper title={'즐겨찾기한 맛집'} link={`${pathname}/star`}>
          {likeStoreList?<StoreContainer likeStoreList={likeStoreList}/>:'댓글이 없습니다'}
        </Wrapper>
        
        {modal? <Modal
          imageHandler = {imageHandler}
          nickNameHandler = {nickNameHandler}
          passwordHanler = {passwordHanler}
          passwordCheckHanler = {passwordCheckHanler}
          phoneHandler = {phoneHandler}
          updateMember = {updateMember}
          nickName = {nickName}
          phone = {phone}
          setModal = {setModal}
        /> : ''}
      </div>
    </>
  );
}

export default Mypage;