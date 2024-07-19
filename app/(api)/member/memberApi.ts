import {axiosWithAuth} from "@/app/(hooks)/common/axiosWithAuth";
import { getMemberType, patchMemberType } from "@/app/type";

const MemberApi = () => {
  const getProfile = async () => {
    const result = await axiosWithAuth.get(`/member`)
    return result.data;
  }
  
  const getMyReview = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/myReview?page=${pageNumber}`);
    return result.data;
  }
  
  const getMyReply = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/myReply?page=${pageNumber}`);
    return result.data;
  }
  
  const getLikeStore = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/favorite?page=${pageNumber}`);
    return result.data;
  }
  
  const getLikeReview = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/likeReview?page=${pageNumber}`);
    return result.data;
  }

  const patchMember = async (data :FormData) => {
    const result = await axiosWithAuth.patch(`/member`,
      data,
      {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      }
    );
    return result;
  }

  const deleteMember = () => {
    const result = axiosWithAuth.delete('/member');
    return result;
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
