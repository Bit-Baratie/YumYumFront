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

  const getProfile = async (memberId: number) => {
    const result = await axiosWithAuth.get(`/member/${memberId}`)
    return result;
  }
  
  const getMyReview = async (memberId: number) => {
    // const result = await axiosWithAuth.get(`/member/myreivew/pageNumber=${0}`);
    // return result;
  
    const test = [{
      id: 1,
      name:'asd',
      address:'asd',
      nickName:'asd',
      grade:1,
      content:'fds',
      imageUrl:'/'
    }]
  
    return test;
  }
  
  const getMyReply = async (memberId: number) => {
    const result = await axiosWithAuth.get(`/reply/myreply?pageNumber=${0}`);
    return result;
  
    // const test = [{
    //   imageUrl: '/',
    //   nickName: 'ads',
    //   createdAt: '2014-12-2',
    //   content: '존맛탱'
    // }]
  
    // return test;
  }
  
  const getLikeStore = async (memberId: number) => {
    // const result = await axiosWithAuth.get(`/member/likeReview`);
    // return result;
  
    const store = [{
      id: 1,
      name: 'ㅁㄴㅇ',
      address: 'ㅁㄴㅇ',
      favoriteNumber: 1,
      reviewNumber: 1,
      imageUrl: '/',
      categoryList: ['ㅁㄴㅇ','ㅇㅁㄴ'],
      views: 1,
      hashTagList: ['ㄴㅇㄹ','ㄹㅇㄴ'],
      grade: 1,
      isFavorite: true,
    }]
  
    return store;
  }
  
  const getLikeReview = async (memberId: number) => {
    const result = await axiosWithAuth.get(`/review/likeReview?pageNumber=${0}`);
    return result;

    // const test = [{
    //   id: 1,
    //   name:'asd',
    //   address:'asd',
    //   nickName:'asd',
    //   grade:1,
    //   content:'존맛탱구리',
    //   imageUrl:'/'
    // }]
  
    // return test;
  }

  const patchMember = async ({data}: {data: PatchType}) => {
    // const result = await axiosWithAuth.patch(`/member`, data);
    // return result;
    console.log(data)
  }

  return {
    getLikeReview,
    getLikeStore,
    getMyReply,
    getProfile,
    getMyReview,
    patchMember
  }
}

export default MemberApi;
