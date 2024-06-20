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

    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map
  });
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(lat-1, lng-1),
    map: map
});var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(lat-2, lng-2),
  map: map
});
  }, [lat, lng]);

  return (
    <div id="map"></div>
  );
}

export default Test;