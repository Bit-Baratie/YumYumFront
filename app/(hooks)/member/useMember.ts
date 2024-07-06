'use client'
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import MemberApi from "@/app/(api)/member/memberApi";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useMember = () => {
  const { getLikeReview, getLikeStore, getMyReply, getMyReview, getProfile, patchMember, deleteMember } = MemberApi();
  const {userInfo} = userStore();
  const {data: profile} = useQuery({queryKey: ['profile', userInfo.memberId], queryFn:() => getProfile(userInfo.memberId)});
  const {data: myReviewList} = useQuery({queryKey: ['myReview', userInfo.memberId], queryFn: () => getMyReview(userInfo.memberId)});
  const {data: myReplyList} = useQuery({queryKey: ['myReply', userInfo.memberId], queryFn: () => getMyReply(userInfo.memberId)});
  const {data: likeReview} = useQuery({queryKey: ['likeReview', userInfo.memberId], queryFn: () => getLikeReview(userInfo.memberId)});
  const {data: likeStoreList} = useQuery({queryKey: ['likeStore', userInfo.memberId], queryFn: () => getLikeStore(userInfo.memberId)});
  const [imageUrl, setImageUrl] = useState('/');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setImageUrl('/');
    setNickName(userInfo.nickName);
    setPhone(userInfo.phoneNumber);
    console.log(userInfo.memberId)
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
    deleteMember();
    router.push('/');
  }

  return {
    profile,
    myReplyList, 
    myReviewList, 
    likeReview, 
    likeStoreList,
    nickName,
    phone,
    updateModal,
    deleteModal,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateMember,
    removeMember,
    setUpdateModal,
    setDeleteModal
  }
}

export default useMember;