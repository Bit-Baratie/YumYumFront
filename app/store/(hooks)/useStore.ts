'use client';
import { useState } from 'react';
import Store from "@/app/(hooks)/userStore";
import { useQuery } from "@tanstack/react-query";
import StoreApi from "@/app/store/(api)/StoreApi";


const useStore = () => {
  const { userInfo } = Store();
  const [storeImage, setStoreImage] = useState<string>('');
  const [storeId, setStoreId] = useState<Array<number>>([]);
  const [storeName, setStoreName] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [like, setLike] = useState<string>('');
  const [views, setViews] = useState<string>('');
  const [storeAddress, setStoreAddress] = useState<string>('');
  const [hashTagList, setHashTagList] = useState<string[]>([]);
  const [favorite, setFavorite] = useState<boolean>(false);


  const favoriteHandler = (favoriteStatus: boolean) => {
    setFavorite(favoriteStatus => !favoriteStatus); // 상태 토글
  };


  return {
    userInfo,
    storeId,
    storeImage,
    storeName,
    grade,
    like,
    views,
    storeAddress,
    hashTagList,
    favorite,
    setStoreId,
    setStoreImage,
    setStoreName,
    setGrade,
    setLike,
    setViews,
    setStoreAddress,
    setHashTagList,
    setFavorite,
    favoriteHandler
  }
}
export default useStore;