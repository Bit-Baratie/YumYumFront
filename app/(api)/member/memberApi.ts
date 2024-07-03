import axios from "axios"

export const getProfile = async (memberId: number) => {
  const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}`)
  .then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err.message);
  })

  return result;
}

export const getMyReview = async (memberId: number) => {
  // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/review`)
  // .then((res) => {
  //   return res.data
  // }).catch((err) => {
  //   console.log(err.message);
  // })

  // return result;

  const test = {
    id: 1,
    name:'asd',
    address:'asd',
    nickName:'asd',
    grade:1,
    content:'fds',
    imageUrl:'/'
  }

  return test;
}

export const getMyReply = async (memberId: number) => {
  // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/reply`)
  // .then((res) => {
  //   return res.data
  // }).catch((err) => {
  //   console.log(err.message);
  // })

  // return result;

  const test = {
    imageUrl: '/',
    nickName: 'ads',
    createdAt: '2014-12-2',
    content: '존맛탱'
  }

  return test;
}

export const getLikeStore = async (memberId: number) => {
  // const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/store/star`)
  // .then((res) => {
  //   return res.data
  // }).catch((err) => {
  //   console.log(err.message);
  // })

  // return result;

  const store = {
    id: 1,
    name: 'ㅁㄴㅇ',
    address: 'ㅁㄴㅇ',
    favoriteNumber: 1,
    reviewNumber: 1,
    imageUrl: 'ㅁㄴㅇ',
    categoryList: ['ㅁㄴㅇ','ㅇㅁㄴ'],
    views: 1,
    hashTagList: ['ㄴㅇㄹ','ㄹㅇㄴ'],
    grade: 1,
    isFavorite: true,
  }

  return store;
}

export const getLikeReview = async (memberId: number) => {
  const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_IP}/member/${memberId}/store/star`)
  .then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err.message);
  })

  return result;
}