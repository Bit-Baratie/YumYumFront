
const myLocation = (map: naver.maps.Map) => {
    //내 현재 위치를 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        new naver.maps.Marker({
            position: currentLocation,
            map: map,
            title: "Your Location",
        });

        // 우측 하단 버튼 클릭 시 내 위치로 이동
        map.setCenter(currentLocation);
    })
}
export default myLocation;

// 좌표 구하는 함수[]
// 마커 찍어주는 함수[]
// 내 좌표 구해주는 함수
// 내 위치로 이동해주는 함수