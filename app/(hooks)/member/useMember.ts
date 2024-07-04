'use client'
import { useQuery } from "@tanstack/react-query";
import userStore from "../userStore";
import MemberApi from "@/app/(api)/member/memberApi";

const useMember = () => {
  const { getLikeReview, getLikeStore, getMyReply, getMyReview, getProfile } = MemberApi();
  const {userInfo} = userStore();
  const {data: profile} = useQuery({queryKey: ['profile', userInfo.id], queryFn:() => getProfile(userInfo.id)});
  const {data: myReviewList} = useQuery({queryKey: ['myReview', userInfo.id], queryFn: () => getMyReview(userInfo.id)});
  const {data: myReplyList} = useQuery({queryKey: ['myReply', userInfo.id], queryFn: () => getMyReply(userInfo.id)});
  const {data: likeReview} = useQuery({queryKey: ['likeReview', userInfo.id], queryFn: () => getLikeReview(userInfo.id)});
  const {data: likeStoreList} = useQuery({queryKey: ['likeStore', userInfo.id], queryFn: () => getLikeStore(userInfo.id)});

  console.log(myReviewList)
  return {
    profile,
    myReplyList, 
    myReviewList, 
    likeReview, 
    likeStoreList
  }
}

export default useMember;