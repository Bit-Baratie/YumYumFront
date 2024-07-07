import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth"
import axios from "axios"

interface profilType {
  email: string
  imageUrl: string
  nickName: string
  password: null
  phoneNumber: string
}

interface PatchType {
  imageUrl: string;
  nickName: string;
  password: string|null;
  phoneNumber: string;
}

const MemberApi = () => {
  const {axiosWithAuth} = useAxiosWithAuth();

  const getProfile = async () => {
    const result = await axiosWithAuth.get(`/member`)
    return result;
  }
  
  const getMyReview = async (pageNumber: number) => {
    const result = await axiosWithAuth.get(`/review/myreivew/pageNumber=${pageNumber}`);
    return result;
  }
  
  const getMyReply = async (pageNumber: number) => {
    const result = await axiosWithAuth.get(`/reply/myreply?pageNumber=${pageNumber}`);
    return result;
  }
  
  const getLikeStore = async (pageNumber: number) => {
    const result = await axiosWithAuth.get(`/store/favorite?pageNumber=${pageNumber}`);
    return result;
  }
  
  const getLikeReview = async (pageNumber: number) => {
    const result = await axiosWithAuth.get(`/review/likeReview?pageNumber=${pageNumber}`);
    return result;
  }

  const patchMember = async ({data}: {data: PatchType}) => {
    const result = await axiosWithAuth.patch(`/member`, data);
    return result;
  }

  const deleteMember = () => {
    axiosWithAuth.delete('/member');
  }

  return {
    getLikeReview,
    getLikeStore,
    getMyReply,
    getProfile,
    getMyReview,
    patchMember,
    deleteMember
  }
}

export default MemberApi;
