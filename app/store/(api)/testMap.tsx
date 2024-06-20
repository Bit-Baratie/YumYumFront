'use client'

import { useEffect } from "react";
import '@/app/store/(api)/map.scss';
import myLocation from "../(component)/MyLocation";
import Location from '../../../public/asset/image/location.svg'

const testMap = () => {
    let lat = 37.359531;
    let lng = 127.1052133;
    let map: naver.maps.Map;
    useEffect(() => {
        const location = new naver.maps.LatLng(lat, lng);
        //지도 그리기
        map = new naver.maps.Map('map', {
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

        //     navigator.geolocation.getCurrentPosition((position) => {
        //         const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //         new naver.maps.Marker({
        //             position: currentLocation,
        //             map: map,
        //             title: "Your Location",
        //         });

        //         // 지도 첫 접속 시 사용자의 현 위치로 중심이 오도록 추가했습니다!
        //         map.setCenter(currentLocation);
        //     })
        // }

        myLocation(map);
    }, [lat, lng]);



    return (
        <>
            <div id="map"></div>
            <button onClick={() => myLocation(map)} className="myLocation">
                <Location width='23' height='23' fill='white' />
            </button>
        </>
    );
}

export default testMap;