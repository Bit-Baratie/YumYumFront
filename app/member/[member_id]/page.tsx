'use client'
import MemberPageStyle from './memberPage.module.scss';
import ReviewContainer from '@/app/(component)/member/review'
import Image from 'next/image';
import useMember from '@/app/(hooks)/member/useMember'
import {ReplyWrapper} from '@/app/(component)/member/reply'
import Wrapper from '@/app/(component)/member/wrapper'
import { usePathname } from 'next/navigation'
import StoreContainer from '@/app/(component)/member/store';
import UpdateModal from '@/app/(component)/member/updateModal';

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
    phone,
    updateModal,
    deleteModal,
    setUpdateModal,
    setDeleteModal} = useMember();
  const pathname = usePathname();

  return (
    <>
      <div className={MemberPageStyle.dashboardWrapper}>
        <div className={MemberPageStyle.dashboard}>
        {!profile ? '회원정보가 없습니다':
        <>
          <div className={MemberPageStyle.profile}>
            <Image src={'/'} width={150} height={150} alt='프로필이미지' className={MemberPageStyle.profileImage}/>
            <div className={MemberPageStyle.profileInfo}>
              <span>{profile.nickName} <span onClick={() => setUpdateModal(!updateModal)}>연필</span></span>
              <span>{profile.email}</span>
              <span>{profile.phoneNumber}</span>
            </div>
          </div>
          <div className={MemberPageStyle.btnContainer}>
            <button className={MemberPageStyle.btn} onClick={() => setDeleteModal(!deleteModal)}>회원탈퇴</button>
          </div>
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
        
        {updateModal? <UpdateModal
          imageHandler = {imageHandler}
          nickNameHandler = {nickNameHandler}
          passwordHanler = {passwordHanler}
          passwordCheckHanler = {passwordCheckHanler}
          phoneHandler = {phoneHandler}
          updateMember = {updateMember}
          nickName = {nickName}
          phone = {phone}
          modal = {updateModal}
          setModal = {setUpdateModal}

        /> : ''}
      </div>
    </>
  );
}

export default Mypage;