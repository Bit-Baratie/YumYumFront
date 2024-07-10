'use client';
import useStoreApi from "../(api)/StoreApi";
import StoreInfo from "./StoreInfo";
import { useEffect, useState } from "react";
import { search } from "@/app/(api)/common/searchApi";
import useSearch from "@/app/(hooks)/common/useSearch";
import useStore from "@/app/store/(hooks)/useStore"
import Store from "../page";

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

interface location {
  latitude: number,
  longitude: number,
}

const StoreList = () => {
  // const { storeId, setStoreId } = useStore();
  const { getStoreInfo } = useStoreApi();
  const { data } = useSearch();
  const [storeList, setStoreList] = useState<Array<store> | undefined>([]);
  useEffect(() => {
    const fetchStoreInfo = async () => {
      let latitude = 37.4995961;
      let longitude = 127.0289929;

      const location = { longitude, latitude };
      try {
        const StoreInfoResult = await getStoreInfo(location)
        setStoreList(Array.isArray(StoreInfoResult) ? StoreInfoResult : [StoreInfoResult]);
        if (data?.length !== 0) {
          setStoreList(data)
        } else {
          setStoreList(StoreInfoResult)
        }
      } catch (error) {
        console.error("Error fetching store info:", error);
      }
    };
    fetchStoreInfo();
  }, [data, setStoreList]);
  if (storeList?.length === 0) {
    return (
      <div id="storeList">
        <div id="searchStoreNumber">
          <div>검색된 결과가 없습니다</div>
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
        <div><span>{storeList?.length}</span>건의 검색결과가 있습니다.</div>
      </div>
      <div className="StoreListMap">
        {storeList?.map(store => (
          <StoreInfo
            key={store.storeId}
            store={store}
          />
        ))}
      </div>
    </div>
  );
};
export default StoreList;
