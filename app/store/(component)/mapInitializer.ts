// mapInitializer.js

export const initializeMap = () => {
  const map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
    // 추가 옵션
  });
  return map;
};
