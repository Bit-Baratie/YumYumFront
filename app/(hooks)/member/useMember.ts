'use client'
import { getLikeReview, getLikeStore, getMyReply, getMyReview, getProfile } from "@/app/(api)/member/memberApi";
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";

const useMember = () => {
  const {userInfo} = userStore();
  const {data: profile} = useQuery({queryKey: ['profile', userInfo.id], queryFn: () => getProfile(userInfo.id)});
  const {data: myReview} = useQuery({queryKey: ['myReview', userInfo.id], queryFn: () => getMyReview(userInfo.id)});
  const {data: myReply} = useQuery({queryKey: ['myReply', userInfo.id], queryFn: () => getMyReply(userInfo.id)});
  const {data: likeReview} = useQuery({queryKey: ['likeReview', userInfo.id], queryFn: () => getLikeReview(userInfo.id)});
  const {data: likeStore} = useQuery({queryKey: ['likeStore', userInfo.id], queryFn: () => getLikeStore(userInfo.id)});

  return {
    profile, myReply, myReview, likeReview, likeStore
  }
}

export default useMember;