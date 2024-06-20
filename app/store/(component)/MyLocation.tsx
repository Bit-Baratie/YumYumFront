
const myLocation = (map: naver.maps.Map) => {
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