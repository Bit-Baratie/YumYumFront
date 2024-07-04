'use client';
import { useState, useEffect } from 'react';
import Bookmarks from '../../../public/asset/image/bookmark.svg';
import useStore from "@/app/store/(hooks)/useStore";
import "./storeList.scss";
import Google from "@/public/asset/image/Google.svg"
import Link from "next/link";


interface store {
  id: number,
  name: string,
  address: string,
  favoriteNumber: number,
  reviewNumber: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashTagList: string[],
  grade: number,
  isFavorite: boolean,
}

interface StoreInfoProps {
  store: store
}
const StoreInfo = ({ store }: StoreInfoProps) => {
  const [iconColor, setIconColor] = useState<String>("#E2E2E2");
  const { favoriteHandler, favorite } = useStore();

  useEffect(() => {
    favoriteHandler(store.isFavorite);
  }, [])


  return (
    <div id="searchStoreList">
      <div className='storeId'>{store.id}</div>
      <Link href={`/store/${store.id}`} >
        <div className="storeImage">
          <Google />
        </div>
        <div className="storeInfo">
          <div className="storeName">
            {store.name}
          </div>
          <div className="gradeLikeViews">
            <div id="grade">★{store.grade}({store.reviewNumber})</div>
            <div id="like">♥️{store.favoriteNumber}</div>
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
            {store.hashTagList.map((tag: string) => (
              <div key={tag} className='hashTag'>#{tag}</div>
            ))}
          </div>
        </div>
      </Link>
      <div className="favorite">
        <Bookmarks style={{ fill: favorite ? '#FFC657' : '#E2E2E2', width: '25px', height: '25px' }} onClick={() => { favoriteHandler(store.isFavorite) }} />
      </div>
    </div >
  )
}

export default StoreInfo;
