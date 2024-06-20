'use client'

import { useEffect } from "react";
import '@/app/test/style.scss';

const Test = () => {
  let lat = 37.359531;
  let lng = 127.1052133;

  useEffect(() => {
    const location = new naver.maps.LatLng(lat, lng);
    //지도 그리기
    const map = new naver.maps.Map('map', {
      center: location,
      zoomControl: true,   // 줌 설정
      zoom: 15,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        new naver.maps.Marker({
          position: currentLocation,
          map: map,
          title: "Your Location",
        });

        // 지도 첫 접속 시 사용자의 현 위치로 중심이 오도록 추가했습니다!
        map.setCenter(currentLocation);
      })};
  }, [lat, lng]);

  return (
    <div id="map"></div>
  );
}

export default Test;