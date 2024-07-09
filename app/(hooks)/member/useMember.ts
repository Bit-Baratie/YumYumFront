'use client'
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import MemberApi from "@/app/(api)/member/memberApi";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const useMember = () => {
  const { getLikeReview, getLikeStore, getMyReply, getMyReview, getProfile, patchMember, deleteMember } = MemberApi();
  const {userInfo, deleteUserInfo} = userStore();
  const {data: profile} = useQuery({queryKey: ['profile', userInfo.memberId], queryFn:() => getProfile()});
  const {data: myReviewList} = useQuery({queryKey: ['myReview', userInfo.memberId], queryFn: () => getMyReview(0)});
  const {data: myReplyList} = useQuery({queryKey: ['myReply', userInfo.memberId], queryFn: () => getMyReply(0)});
  const {data: likeReviewList} = useQuery({queryKey: ['likeReview', userInfo.memberId], queryFn: () => getLikeReview(0)});
  const {data: likeStoreList} = useQuery({queryKey: ['likeStore', userInfo.memberId], queryFn: () => getLikeStore(0)});
  const [imageUrl, setImageUrl] = useState('/');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [updateModal, setUpdateModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setImageUrl('/');
    setNickName(userInfo.nickName);
    setPhone(userInfo.phoneNumber);
  }, [userInfo.nickName, userInfo.phoneNumber, userInfo.profileUrl])

  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  }

  const nickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  }

  const passwordHanler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const passwordCheckHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  }

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const updateMember = () => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    if (nickName==='') {
      alert('닉네임을 입력해주세요');
      return;
    }
    if (phone==='') {
      alert('핸드폰번호를 입력해주세요');
      return;
    }

    const data = {
      imageUrl: imageUrl,
      nickName: nickName,
      password: password===''? null: password,
      phoneNumber: phone
    }

    patchMember({data});
  }

  const removeMember = () => {
    Swal.fire({
      title: "정말 탈퇴하시겠습니까?",
      text: '탈퇴 버튼 선택 시,  계정은 삭제되며 복구되지 않습니다.',
      showCancelButton: true,
      confirmButtonText: "탈퇴",
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMember();
        deleteUserInfo();
        Swal.fire("탈퇴가 완료되었습니다", "", "success");
        router.push('/');
      }
    });
  }

  return {
    profile,
    myReplyList, 
    myReviewList, 
    likeReviewList, 
    likeStoreList,
    nickName,
    phone,
    updateModal,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateMember,
    removeMember,
    setUpdateModal
  }
}

export default useMember;