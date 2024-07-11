'use client'
import '@/app/store/(component)/map.scss';
import Location from '../../../public/asset/image/location.svg'
import myLocation from "./MyLocation";
import { useEffect, useRef, useState } from "react";
import useStoreApi from "@/app/store/(api)/StoreApi";
import useSearch from '@/app/(hooks)/common/useSearch';
import { location, getStoreType } from "@/app/type"


const TestMap = ({ storeId }: { storeId: string }) => {
  let latitude = 37.4995961;
  let longitude = 127.0289929;
  // const LatLng: location = { latitude, longitude };
  const { data, fetchData } = useSearch();
  const { StoreDetailInfo } = useStoreApi();
  let map: naver.maps.Map;
  useEffect(() => {
    const MapRender = async () => {
      const detail = await StoreDetailInfo(Number(storeId));
      const list = await fetchData();

      const result = list.length > 0 ? list : Array(detail.data)
      console.log(result)
      const location1 = new naver.maps.LatLng(latitude, longitude)
      const location2 = new naver.maps.LatLng(result[0].latitude, result[0].longitude)
      const location = result.length > 1 ? location1 : location2

      map = new naver.maps.Map('map', {
        center: location,
        zoomControl: true,   // 줌 설정
        zoom: 16,
        minZoom: 6,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.LARGE,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
      // 지도 그리기
      result.map((store: getStoreType) => {
        var contentString = [
          '<div">',
          `   <h3>${store.name}</h3>`,
          `   <div>★${store.avgGrade}(${store.totalReviewCount})♥️${store.totalFavoriteCount}</div>`,
          `   <p>${store.address}<br />`,
          `   <div>${store.categoryName ? store.categoryName : ""}</div>`,
          '</div>'
        ].join('');

        var infowindow = new naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          borderColor: "#FFFFA1",
          backgroundColor: "#FFFaEF",
          borderWidth: 3,
          anchorColor: "#EEE",
          anchorSkew: true
        });

        var marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(store.latitude, store.longitude),
          map: map,
          title: "Location Marker"
        });
        naver.maps.Event.addListener(marker, "click", function (e) {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });

        infowindow.open(map, marker);
      })




      // myLocation(map);
    };
    MapRender();
  }, [])




  return (
    <>
      <div id="map"></div>
      {/* <Script strategy='beforeInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5?" onLoad={initializeMap} /> */}
      <button onClick={() => myLocation(map)} className="myLocation">
        <Location width='23' height='23' fill='white' />
      </button>
    </>
  );
}


export default TestMap;