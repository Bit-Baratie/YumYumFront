'use client';
import useStoreApi from "../(api)/StoreApi";
import StoreInfo from "./StoreInfo";
import { useEffect, useState } from "react";
import useSearch from "@/app/(hooks)/common/useSearch";
import { getStoreType, location } from "@/app/type";

const StoreList = ({ myLatLng }: { myLatLng: location }) => {
  // const { storeId, setStoreId } = useStore();
  const { getStoreInfo } = useStoreApi();
  const { data } = useSearch();
  const [storeList, setStoreList] = useState<Array<getStoreType> | undefined>([]);
  useEffect(() => {
    const fetchStoreInfo = async () => {

      //api데이터 예외처리
      try {
        const StoreInfoResult = await getStoreInfo(myLatLng)
        // setStoreList(Array.isArray(StoreInfoResult) ? StoreInfoResult : [StoreInfoResult]);
        if (data?.length !== 0) {
          // console.log(data);
          setStoreList(data)
        } else {
          // console.log(StoreInfoResult)
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
        <div><span>{storeList?.length}</span>건의 검색결과가 있습니다.</div>
      </div>
      <div className="StoreListMap">
        {storeList?.map(store => (
          <StoreInfo
            key={store.storeId}
            store={store} />
        ))}
      </div>
    </div>
  );
};
export default StoreList;
