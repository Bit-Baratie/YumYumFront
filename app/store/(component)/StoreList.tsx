'use client';
import { getStoreInfo } from "../(api)/StoreApi";
import StoreInfo from "./StoreInfo";
import { useEffect, useState } from "react";
import useStore from "@/app/store/(hooks)/useStore"
import Store from "../page";

interface store {
  id: number;
  name: string;
  address: string;
  favoriteNumber: number;
  reviewNumber: number;
  imageUrl: string;
  views: number;
  hashTagList: string[];
  grade: number;
  categoryList: string[];
  isFavorite: boolean;
}

interface location {
  latitude: number,
  longitude: number,
}

const StoreList = () => {


  const [storeList, setStoreList] = useState<Array<store>>([]);


  useEffect(() => {
    const fetchStoreInfo = async () => {
      let latitude = 37.359531;
      let longitude = 127.1052133;

      const location = { longitude, latitude };
      try {
        const StoreInfoResult = await getStoreInfo(location)
        setStoreList(Array.isArray(StoreInfoResult) ? StoreInfoResult : [StoreInfoResult]);
      } catch (error) {
        console.error("Error fetching store info:", error);
      }
    };

    fetchStoreInfo();
  }, []);

  if (storeList.length === 0) {
    return (
      <div id="storeList">
        <div id="searchStoreNumber">
          <div><span>0</span>건의 검색결과가 있습니다.</div>
        </div>
        <div id="noDataMessage">
          <div id="noDataImage" />
          <div id="noDataInfo">
            <div className="noDataInfo" />
            <div className="noDataInfo" />
            <div className="noDataInfo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="storeList">
      <div id="searchStoreNumber">
        {/* Span에 검색결과 계산해서 가져와야함 */}
        <div><span>28</span>건의 검색결과가 있습니다.</div>
      </div>
      <div className="StoreListMap">
        {storeList.map(store => (
          <StoreInfo
            key={store.id}
            store={store}
          />
        ))}
      </div>
    </div>
  );
};
export default StoreList;
