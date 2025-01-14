'use client'
import StoreInfo from "@/app/(component)/store/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import { useRef } from "react";
import { getStoreType } from "@/app/type";

const StarPage = () => {
  const { likeStoreList, nextLikeStoreList } = useMember();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && nextLikeStoreList();

  useObserver({
    target: bottomRef,
    onIntersect
  });

  return (
    <>
      <div className={PageStyle.container}>
        {likeStoreList?.pages.map((page) => (
          <div key={page.pageNumber}>
            {page.content.map((item: getStoreType) => (
              <StoreInfo store={item} key={item.storeId} />
            ))}
          </div>
        ))}

      <div ref={bottomRef}></div>
      </div>
    </>
  );
}

export default StarPage;