'use client'
import StoreInfo from "@/app/store/(component)/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import { useRef } from "react";

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
  latitude: number,
  longitude: number,
}

const StarPage = () => {
  const {likeStoreList, nextLikeStoreList} = useMember();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]:any) => entry.isIntersecting && nextLikeStoreList();

  useObserver({
    target: bottomRef,
    onIntersect
  });
  
  return (
    <>
    <div className={PageStyle.container}>
      {likeStoreList?.pages.map((page) => (
        <>
          {page.content.map((item: store) => (
            <StoreInfo store={item}/>
          ))}
        </>
      ))}
    </div>

    <div ref={bottomRef}></div>
    </>
  );
}

export default StarPage;