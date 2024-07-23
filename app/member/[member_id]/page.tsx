"use client";
import MemberPageStyle from "./memberPage.module.scss";
import ReviewContainer from "@/app/(component)/member/review";
import Image from "next/image";
import useMember from "@/app/(hooks)/member/useMember";
import { ReplyWrapper } from "@/app/(component)/member/reply";
import Wrapper from "@/app/(component)/member/wrapper";
import { usePathname } from "next/navigation";
import StoreContainer from "@/app/(component)/member/store";
import UpdateModal from "@/app/(component)/member/updateModal";
import CardSkeleton from "@/app/(component)/skeleton/card";
import ProfileSkeleton from "@/app/(component)/skeleton/profile";
import useImage from "@/app/(hooks)/common/useImage";
import CustomImage from "@/app/(component)/common/customImage";

const Mypage = () => {
  const {
    profile,
    myReviewList,
    myReplyList,
    likeReviewList,
    likeStoreList,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateHandler,
    removeMemberHandler,
    nickName,
    phone,
    imageUrl,
    fileInput,
    updateModal,
    myReplyState,
    myReviewState,
    likeReviewState,
    likeStoreState,
    setUpdateModal,
    setImageUrl,
    setNickName,
    setPhone,
  } = useMember();
  const { errorImage } = useImage();
  const pathname = usePathname();

  return (
    <>
      <div className={MemberPageStyle.dashboardWrapper}>
        <div className={MemberPageStyle.dashboard}>
          {!profile ? (
            <ProfileSkeleton />
          ) : (
            <>
              <div className={MemberPageStyle.profile}>
                <CustomImage
                  style={MemberPageStyle.profileImage}
                  src={profile.imageUrl}
                  width={150}
                  height={150}
                  alt="프로필이미지"
                />
                <div className={MemberPageStyle.profileInfo}>
                  <div className={MemberPageStyle.nickname}>
                    {profile.nickname}
                    <Image
                      src={"/asset/image/pencil.png"}
                      width={15}
                      height={15}
                      alt="연필"
                      onClick={() => setUpdateModal(!updateModal)}
                    />
                  </div>
                  <div>{profile.email}</div>
                  <div>{profile.phoneNumber}</div>
                </div>
              </div>
              <div className={MemberPageStyle.btnContainer}>
                <button
                  className={MemberPageStyle.btn}
                  onClick={removeMemberHandler}
                >
                  회원탈퇴
                </button>
              </div>
            </>
          )}
        </div>

        <Wrapper
          title={"내가 쓴 리뷰"}
          link={`${pathname}/review`}
          totalCnt={myReviewList?.pages[0].numberOfElements}
        >
          {myReviewState ? (
            <CardSkeleton />
          ) : (
            <>
              {myReviewList ? (
                <ReviewContainer myReviewList={myReviewList.pages[0].content} />
              ) : (
                "리뷰가 없습니다"
              )}
            </>
          )}
        </Wrapper>

        <Wrapper
          title={"좋아요 한 리뷰"}
          link={`${pathname}/like`}
          totalCnt={likeReviewList?.pages[0].numberOfElements}
        >
          {likeReviewState ? (
            <CardSkeleton />
          ) : (
            <>
              {likeReviewList ? (
                <ReviewContainer
                  myReviewList={likeReviewList.pages[0].content}
                />
              ) : (
                "리뷰가 없습니다"
              )}
            </>
          )}
        </Wrapper>

        <Wrapper
          title={"내가 쓴 댓글"}
          link={`${pathname}/reply`}
          totalCnt={myReplyList?.pages[0].numberOfElements}
        >
          {myReplyState ? (
            <CardSkeleton />
          ) : (
            <>
              {myReplyList ? (
                <ReplyWrapper myReplyList={myReplyList.pages[0].content} />
              ) : (
                "작성한 댓글이 없습니다"
              )}
            </>
          )}
        </Wrapper>

        <Wrapper
          title={"즐겨찾기한 맛집"}
          link={`${pathname}/star`}
          totalCnt={likeStoreList?.pages[0].numberOfElements}
        >
          {likeStoreState ? (
            <CardSkeleton />
          ) : (
            <>
              {likeStoreList ? (
                <StoreContainer
                  likeStoreList={likeStoreList.pages[0].content}
                />
              ) : (
                "즐겨찾기한 맛집이 없습니다"
              )}
            </>
          )}
        </Wrapper>

        {updateModal ? (
          <UpdateModal
            imageHandler={imageHandler}
            nickNameHandler={nickNameHandler}
            passwordHanler={passwordHanler}
            passwordCheckHanler={passwordCheckHanler}
            phoneHandler={phoneHandler}
            updateMember={updateHandler}
            profile={profile}
            imageUrl={imageUrl}
            fileInput={fileInput}
            modal={updateModal}
            setModal={setUpdateModal}
            setImageUrl={setImageUrl}
            setPhone={setPhone}
            setNickName={setNickName}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Mypage;
