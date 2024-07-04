'use client'
import '@/app/store/(component)/map.scss';
import Location from '../../../public/asset/image/location.svg'
import myLocation from "./MyLocation";
import Script from "next/script";
import { useEffect } from "react";
import { getStoreInfo } from "@/app/store/(api)/StoreApi";

const TestMap = () => {

  interface location {
    latitude: number,
    longitude: number,
  }
  let latitude = 37.359531;
  let longitude = 127.1052133;
  let map: naver.maps.Map;

  const LatLng: location = { latitude, longitude };


  useEffect(() => {
    const MapRender = async () => {
      const result = await getStoreInfo(LatLng);


      const location = new naver.maps.LatLng(result[0].latitude, result[0].longtitude);
      //지도 그리기
      map = new naver.maps.Map('map', {
        center: location,
        zoomControl: true,   // 줌 설정
        zoom: 15,
        minZoom: 6,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.LARGE,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
      result.map(store => {
        var marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(store.latitude, store.longtitude),
          map: map,
          title: "Location Marker"
        });
      });

      // myLocation(map);
    };
    MapRender();
  }, [])




  return (
    <>
      <div id="map"></div>
      <Script strategy='beforeInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5" />
      <button onClick={() => myLocation(map)} className="myLocation">
        <Location width='23' height='23' fill='white' />
      </button>
    </>
  );
}


export default TestMap;