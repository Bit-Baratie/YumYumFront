'use client';
import { useState, useEffect } from 'react';
import Bookmarks from '../../../public/asset/image/bookmark.svg';
import useStore from "@/app/store/(hooks)/useStore";
import "./storeList.scss";
import Logo from "@/public/asset/image/logo.svg"
import Link from "next/link";
import useStoreApi from "@/app/store/(api)/StoreApi"
import StoreDetail from '../[store_id]/component/StoreDetail';
import { favorite, getStoreType } from '@/app/type';
import Image from 'next/image';




const StoreInfo = ({ store }: { store: getStoreType }) => {
  const { favoriteHandler, favorite, setFavorite } = useStore();
  const { postStar } = useStoreApi();

  const data: favorite = { favoriteStatus: favorite, storeId: store.storeId }

  useEffect(() => {
    favoriteHandler(!store.favoriteStatus);
    setFavorite(!store.favoriteStatus);
  }, [])


  return (
    <div id="searchStoreList">
      <div className='storeId'>{store.storeId}</div>
      <Link href={`/store/${store.storeId}`} >
        {store.imageUrl ?
          <>
            <div className="storeImage">
              <Image src={store.imageUrl} width={200} height={155} alt='가게이미지' />
            </div>
          </>
          :
          <>
            <Logo />
          </>}
        <div className="storeInfo">
          <div className="storeName">
            {store.name}
          </div>
          <div className="gradeLikeViews">
            <div id="grade">★{store.avgGrade}({store.totalReviewCount})</div>
            <div id="like">♥️{store.totalFavoriteCount}</div>
            <div id="views">👀{store.views}</div>
          </div>
          <div className='categoryList'>
            <div className='category'>{store.categoryList}</div>
          </div>
          <div className="storeAddress">
            <div>{store.address}</div>
          </div>
          <div className='hashTagList'>
            {store.hashtagList?.map((tag, index) => (
              <div key={index} className='hashTag'>{tag}</div>
            ))}
          </div>
        </div>
      </Link>
      <div className="favorite">
        <Bookmarks style={{ fill: favorite ? '#E2E2E2' : '#FFC657', width: '25px', height: '25px' }} onClick={() => { postStar(data); favoriteHandler(store.favoriteStatus); }} />
      </div>
    </div >
  )
}

export default StoreInfo;
