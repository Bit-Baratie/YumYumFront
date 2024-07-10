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
    likeReviewList,
    likeStoreList,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateMember,
    removeMember,
    nickName,
    phone,
    updateModal,
    setUpdateModal} = useMember();
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
              <div className={MemberPageStyle.nickname}>{profile.nickName}<Image src={'/asset/image/pencil.png'} width={15} height={15} alt='연필' onClick={() => setUpdateModal(!updateModal)}/></div>
              <div>{profile.email}</div>
              <div>{profile.phoneNumber}</div>
            </div>
          </div>
          <div className={MemberPageStyle.btnContainer}>
            <button className={MemberPageStyle.btn} onClick={removeMember}>회원탈퇴</button>
          </div>
          </>
          }
          
        </div>

        <Wrapper title={'내가 쓴 리뷰'} link={`${pathname}/review`} totalCnt={myReviewList?.pages[0].numberOfElements}>
          {myReviewList?<ReviewContainer myReviewList={myReviewList.pages[0].content}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'좋아요 한 리뷰'} link={`${pathname}/like`} totalCnt={likeReviewList?.pages[0].numberOfElements}>
          {likeReviewList?<ReviewContainer myReviewList={likeReviewList.pages[0].content}/>:'리뷰가 없습니다'}
        </Wrapper>

        <Wrapper title={'내가 쓴 댓글'} link={`${pathname}/reply`} totalCnt={myReplyList?.pages[0].numberOfElements}>
          {myReplyList?<ReplyWrapper myReplyList={myReplyList.pages[0].content}/>:'댓글이 없습니다'}
        </Wrapper>

        <Wrapper title={'즐겨찾기한 맛집'} link={`${pathname}/star`} totalCnt={likeStoreList?.pages[0].numberOfElements}>
          {likeStoreList?<StoreContainer likeStoreList={likeStoreList.pages[0].content}/>:'즐겨찾기한 맛집이 없습니다'}
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