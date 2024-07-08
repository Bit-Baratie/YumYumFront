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
  hashtags: hashtagListType[];
  categoryName: string,
  avgGrade: number;
  favoriteStatus: boolean;
}

interface location {
  latitude: number,
  longitude: number,
}
interface hashtagListType {
  id: number,
  content: string
}
const StoreList = () => {

  const { getStoreInfo } = useStoreApi();
  const { keyword, data } = useSearch();
  const [storeList, setStoreList] = useState<Array<store> | undefined>([]);


  useEffect(() => {
    const fetchStoreInfo = async () => {
      let latitude = 37.359531;
      let longitude = 127.1052133;

      const location = { longitude, latitude };
      try {
        const keywordResult: store[] = await search(keyword);
        console.log(data);
        const StoreInfoResult = await getStoreInfo(location)


        // setStoreList(Array.isArray(StoreInfoResult) ? StoreInfoResult : [StoreInfoResult]);
        if (data?.length !== 0) {
          console.log("b")
          setStoreList(data)
        } else {
          console.log("a")
          setStoreList(StoreInfoResult);
        }

      } catch (error) {
        console.error("Error fetching store info:", error);
      }
    };

    fetchStoreInfo();
  }, [storeList]);

  if (storeList?.length === 0) {
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
        <div><span>1</span>건의 검색결과가 있습니다.</div>
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
