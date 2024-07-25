"use client";
import { useState, useEffect } from "react";
import Bookmarks from "../../../public/asset/image/bookmark.svg";
import useStore from "@/app/(hooks)/store/useStore";
import storeScss from "./storeList.module.scss";
import Logo from "@/public/asset/image/logo.svg";
import Link from "next/link";
import useStoreApi from "@/app/(api)/store/StoreApi";
import { favorite, getStoreType } from "@/app/type";
import Image from "next/image";
import { EyeFilled, StarFilled } from "@ant-design/icons";
import Mark from "@/public/asset/image/mark.svg";

const StoreInfo = ({ store }: { store: getStoreType }) => {
  const { favoriteHandler, favorite, setFavorite } = useStore();
  const { postStar } = useStoreApi();

  const data: favorite = { favoriteStatus: favorite, storeId: store.storeId };

  useEffect(() => {
    favoriteHandler(!store.favoriteStatus);
    setFavorite(!store.favoriteStatus);
  }, []);

  return (
    <div id={storeScss.searchStoreList}>
      <div className={storeScss.storeId}>{store.storeId}</div>
      <Link href={`/store/${store.storeId}`} style={{ display: "flex" }}>
        {store.imageUrl ? (
          <>
            <div className={storeScss.storeImage}>
              <Image
                src={store.imageUrl}
                width={130}
                height={90}
                alt="가게이미지"
              />
            </div>
          </>
        ) : (
          <>
            <Logo class={storeScss.logo} />
          </>
        )}
        <div className={storeScss.storeInfo}>
          <div className={storeScss.storeName}>{store.name}</div>
          <div className={storeScss.gradeLikeViews}>
            <div id={storeScss.grade}>
              <StarFilled
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              &nbsp;{store.avgGrade}&nbsp;({store.totalReviewCount})
            </div>
            <div id={storeScss.like}>
              <Mark
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              &nbsp;{store.totalFavoriteCount}
            </div>
            <div id={storeScss.views}>
              <EyeFilled
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              &nbsp;{store.views}
            </div>
          </div>
          <div className={storeScss.categoryList}>
            <div className={storeScss.category}>{store.categoryList}</div>
          </div>
          <div className={storeScss.storeAddress}>
            <div>{store.address}</div>
          </div>
          <div className={storeScss.hashTagList}>
            {store.hashtagList?.map((tag, index) => (
              <div key={index} className={storeScss.hashTag}>
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
      <div className={storeScss.favorite}>
        <Bookmarks
          style={{
            fill: favorite ? "#E2E2E2" : "#FFC657",
            width: "35px",
            height: "35px",
          }}
          onClick={() => {
            postStar(data);
            favoriteHandler(store.favoriteStatus);
          }}
        />
      </div>
    </div>
  );
};

export default StoreInfo;
