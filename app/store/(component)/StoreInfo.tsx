'use client';
import { useState, useEffect } from 'react';
import Bookmarks from '../../../public/asset/image/bookmark.svg';
import useStore from "@/app/store/(hooks)/useStore";
import "./storeList.scss";
import Logo from "@/public/asset/image/logo.svg"
import Link from "next/link";
import useStoreApi from "@/app/store/(api)/StoreApi"
import StoreDetail from '../[store_id]/component/StoreDetail';


interface store {
  storeId: number;
  name: string;
  address: string;
  totalFavoriteCount: number;
  totalReviewCount: number;
  imageUrl: string;
  views: number;
  hashtags: string[];
  categoryName: string,
  avgGrade: number;
  favoriteStatus: boolean;
}

interface data {
  favoriteStatus: boolean,
  storeId: number
}

const { postStar } = useStoreApi();

const StoreInfo = ({ store }: { store: store }) => {
  const { favoriteHandler, favorite, setFavorite } = useStore();

  const data: data = { favoriteStatus: favorite, storeId: store.storeId }

  useEffect(() => {
    favoriteHandler(store.favoriteStatus);
    setFavorite(store.favoriteStatus);
  }, [])


  return (
    <div id="searchStoreList">
      <div className='storeId'>{store.storeId}</div>
      <Link href={`/store/${store.storeId}`} >
        <div className="storeImage">
          <Logo />
        </div>
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
            <div className='category'>{store.categoryName}</div>
          </div>
          <div className="storeAddress">
            <div>{store.address}</div>
          </div>
          <div className='hashTagList'>
            {store.hashtags.map((tag, index) => (
              <div key={index} className='hashTag'>{tag}</div>
            ))}
          </div>
        </div>
      </Link>
      <div className="favorite">
        <Bookmarks style={{ fill: favorite ? '#FFC657' : '#E2E2E2', width: '25px', height: '25px' }} onClick={() => { postStar(data); favoriteHandler(store.favoriteStatus); }} />
      </div>
    </div >
  )
}

export default StoreInfo;
