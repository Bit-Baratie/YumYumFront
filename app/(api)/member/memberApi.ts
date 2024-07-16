import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth";
import { getMemberType, patchMemberType } from "@/app/type";

const MemberApi = () => {
  const {axiosWithAuth} = useAxiosWithAuth();

  const getProfile = async () => {
    const result = await axiosWithAuth.get(`/member`)
    return result.data;
  }
  
  const getMyReview = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/myReview?pageNumber=${pageNumber}`);
    return result.data;
  }
  
  const getMyReply = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/myreply?pageNumber=${pageNumber}`);
    return result.data;
  }
  
  const getLikeStore = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/favorite?pageNumber=${pageNumber}`);
    return result.data;
  }
  
  const getLikeReview = async ({pageNumber}: {pageNumber:unknown}) => {
    const result = await axiosWithAuth.get(`/member/likeReview?pageNumber=${pageNumber}`);
    return result.data;
  }

  const patchMember = async (data :FormData) => {
    const result = await axiosWithAuth.patch(`http://192.168.0.20:3000/member`,
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
