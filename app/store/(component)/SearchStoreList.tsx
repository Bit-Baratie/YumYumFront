'use client'
import TestMap from "@/app/store/(component)/NaverMap";
// import myLocation from "./MyLocation"
import StoreList from "./StoreList";
import { getStoreType, location } from "@/app/type";
import { useEffect, useState } from "react";
import useStoreApi from "@/app/store/(api)/StoreApi";
import useSearch from "@/app/(hooks)/common/useSearch";
import storeScss from "@/app/store/(component)/storeList.module.scss"
import Search from "@/public/asset/image/search.svg";


const SearchStoreList = () => {
  const { keyword, inputHandler, keywordSearch } = useSearch();
  const { getStoreInfo } = useStoreApi();
  const { data } = useSearch();
  const [storeList, setStoreList] = useState<Array<getStoreType>>([]);
  const [myLatLng, setMyLatLng] = useState<location>({ latitude: 37.49959, longitude: 127.0291 })



  useEffect(() => {
    const myLocation = async (): Promise<{ latitude: number; longitude: number }> => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
          },
          error => {
            reject(error);
          }
        );
      });
    };
    const fetchStore = async () => {
      try {
        const LatLng = await myLocation()
        const result = await getStoreInfo(LatLng);
        if (data) {
          setStoreList(data)
        } else {
          console.log(data);
          setStoreList(result);
          setMyLatLng(LatLng)
        }
      } catch (err) {
        console.error(err);
      }

    }


    fetchStore();
  }, [data])


  return (
    <div className={storeScss.container}>
      <div className={storeScss.content}>

        {/* 지도 Api  */}
        {storeList.length !== 0 ?
          <div className={storeScss.mapScss}>
            <TestMap storeInfo={storeList} myLatLng={myLatLng} />
          </div>
          : <div className={storeScss.mapLoadMsg}>지도를 불러오는 중입니다...</div>}
        {/* 가게 리스트 */}
        <div className={storeScss.input}><input type='text' placeholder='지역, 음식 또는 식당명 입력' value={keyword} onChange={(e) => inputHandler(e)} onKeyDown={(e) => keywordSearch(e)} /><Search onClick={keywordSearch} /></div>
        <StoreList myLatLng={myLatLng} />
      </div>
    </div>
  )
}
export default SearchStoreList;