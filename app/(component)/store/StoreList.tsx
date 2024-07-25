'use client';
import useStoreApi from "@/app/(api)/store/StoreApi";
import StoreInfo from "./StoreInfo";
import { useEffect, useState } from "react";
import useSearch from "@/app/(hooks)/common/useSearch";
import { getStoreType, location } from "@/app/type";
import storeScss from "@/app/store/storeList.module.scss";


const StoreList = ({ storeList }: { storeList: getStoreType[] }) => {
  // const { storeId, setStoreId } = useStore();
  // const { getStoreInfo } = useStoreApi();
  // const { data } = useSearch();
  // const [storeList, setStoreList] = useState<Array<getStoreType> | undefined>([]);
  // useEffect(() => {
  //   const fetchStoreInfo = async () => {


  //     //api데이터 예외처리
  //     try {
  //       const StoreInfoResult = await getStoreInfo(myLatLng)
  //       // setStoreList(Array.isArray(StoreInfoResult) ? StoreInfoResult : [StoreInfoResult]);
  //       if (data) {
  //         // console.log(data);
  //         setStoreList(data)
  //       } else {
  //         // console.log(StoreInfoResult)
  //         setStoreList(StoreInfoResult)
  //       }
  //     } catch (error) {
  //       console.error("Error fetching store info:", error);
  //     }
  //   };
  //   fetchStoreInfo();
  // }, [data, setStoreList]);
  // if (storeList?.length === 0) {
  //   <div className={storeScss.storeList}>
  //     <div id={storeScss.searchStoreNumber}>
  //       <div>검색된 결과가 없습니다</div>
  //     </div>
  //     <div id={storeScss.noDataMessage}>
  //       <div id={storeScss.noDataImage} />
  //       <div id={storeScss.noDataInfo}>
  //         <div className={storeScss.noDataInfo} />
  //         <div className={storeScss.noDataInfo} />
  //         <div className={storeScss.noDataInfo} />
  //       </div>
  //     </div>
  //   </div>
  // }

  return (
    <>
      {storeList?.length === 0 &&
        <>
          <div className={storeScss.storeList}>
            <div id={storeScss.searchStoreNumber}>
              <div>검색된 결과가 없습니다</div>
            </div>
            <div id={storeScss.noDataMessage}>
              <div id={storeScss.noDataImage} />
              <div id={storeScss.noDataInfo}>
                <div className={storeScss.noDataInfo} />
                <div className={storeScss.noDataInfo} />
                <div className={storeScss.noDataInfo} />
              </div>
            </div>
          </div>
        </>
        || storeList?.length !== 0 &&
        <>
          <div className={storeScss.storeList}>
            <div id={storeScss.searchStoreNumber}>
              <div><span>{storeList?.length}</span>건의 검색결과가 있습니다.</div>
            </div>
            <div className={storeScss.StoreListMap}>
              {storeList?.map(store => (
                <StoreInfo
                  key={store.storeId}
                  store={store} />
              ))}
            </div>
          </div>
        </>
      }
    </>
  );
};
export default StoreList;
