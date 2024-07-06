'use client';
import { useState, useEffect } from 'react';
import Bookmarks from '../../../public/asset/image/bookmark.svg';
import useStore from "@/app/store/(hooks)/useStore";
import "./storeList.scss";
import Google from "@/public/asset/image/Google.svg"
import Link from "next/link";
import useStoreApi from "@/app/store/(api)/StoreApi"
import StoreDetail from '../[store_id]/component/StoreDetail';


interface store {
  storeId: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashtagList: string[],
  avgGrade: number,
  isFavorite: boolean,
}

interface StoreInfoProps {
  store: store
}
interface data {
  isFavorite: boolean,
  storeId: number
}

const { postStar } = useStoreApi();

const StoreInfo = ({ store }: StoreInfoProps) => {
  const { favoriteHandler, favorite, setFavorite } = useStore();

  const data: data = { isFavorite: favorite, storeId: store.storeId }

  useEffect(() => {
    favoriteHandler(store.isFavorite);
    setFavorite(store.isFavorite);
  }, [])


  return (
    <div id="searchStoreList">
      <div className='storeId'>{store.storeId}</div>
      <Link href={`/store/${store.storeId}`} >
        <div className="storeImage">
          <Google />
        </div>
        <div className="storeInfo">
          <div className="storeName">
            {store.name}
          </div>
          <div className="gradeLikeViews">
            <div id="grade">★{store.avgGrade}({store.reviewCount})</div>
            <div id="like">♥️{store.favoriteCount}</div>
            <div id="views">👀{store.views}</div>
          </div>
          <div className='categoryList'>
            {store.categoryList.map((tag: string) => (
              <div key={tag} className='categoryList'>{tag}&nbsp;</div>
            ))}
          </div>
          <div className="storeAddress">
            <div>{store.address}</div>
          </div>
          <div className='hashTagList'>
            {store.hashtagList.map((tag: string) => (
              <div key={tag} className='hashTag'>#{tag}</div>
            ))}
          </div>
        </div>
      </Link>
      <div className="favorite">
        <Bookmarks style={{ fill: favorite ? '#FFC657' : '#E2E2E2', width: '25px', height: '25px' }} onClick={() => { postStar(data); favoriteHandler(store.isFavorite); }} />
      </div>
    </div >
  )
}

export default StoreInfo;
