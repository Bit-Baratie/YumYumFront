'use client'
import '@/app/store/(component)/map.scss';
import Location from '../../../public/asset/image/location.svg'
import LocationMarker from "../(component)/LocationMarker"
import setCenterMy from "./setCenterMy";
import myLocation from "./MyLocation";
import Script from "next/script";


const TestMap = () => {
    let lat = 37.359531;
    let lng = 127.1052133;
    let map: naver.maps.Map;
    const MapRender = () => {

        const location = new naver.maps.LatLng(lat, lng);
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

        var marker = new naver.maps.Marker({
            position: location,
            map: map,
            title: "Location Marker"
        });
        myLocation(map);

    };




    return (
        <>
            <Script strategy='afterInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5" onLoad={MapRender} />
            <div id="map"></div>
            <button onClick={() => myLocation(map)} className="myLocation">
                <Location width='23' height='23' fill='white' />
            </button>
        </>
    );
}


export default TestMap;