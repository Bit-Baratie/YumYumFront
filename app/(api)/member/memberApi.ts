import useAxiosWithAuth from "@/app/(hooks)/common/useAxiosWithAuth"
import axios from "axios"

interface profilType {
  email: string
  imageUrl: string
  nickName: string
  password: null
  phoneNumber: string
}

const MemberApi = () => {
  const {axiosWithAuth} = useAxiosWithAuth();

  const getProfile = async (memberId: number) => {
    const result = await axiosWithAuth.get(`/member/${memberId}`)
    return result;
  }
  
  const getMyReview = async (memberId: number) => {
    // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/review`)
    // .then((res) => {
    //   return res.data
    // }).catch((err) => {
    //   console.log(err.message);
    // })
  
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
    // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/reply`)
    // .then((res) => {
    //   return res.data
    // }).catch((err) => {
    //   console.log(err.message);
    // })
  
    // return result;
  
    const test = [{
      imageUrl: '/',
      nickName: 'ads',
      createdAt: '2014-12-2',
      content: '존맛탱'
    }]
  
    return test;
  }
  
  const getLikeStore = async (memberId: number) => {
    // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/store/star`)
    // .then((res) => {
    //   return res.data
    // }).catch((err) => {
    //   console.log(err.message);
    // })
  
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
    // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/store/star`)
    // .then((res) => {
    //   return res.data
    // }).catch((err) => {
    //   console.log(err.message);
    // })
  
    // return result;

    const test = [{
      id: 1,
      name:'asd',
      address:'asd',
      nickName:'asd',
      grade:1,
      content:'존맛탱구리',
      imageUrl:'/'
    }]
  
    return test;
  }

  return {
    getLikeReview,
    getLikeStore,
    getMyReply,
    getProfile,
    getMyReview
  }
}

export default MemberApi;
