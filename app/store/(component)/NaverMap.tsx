'use client';
import '@/app/store/(component)/map.scss';
import Location from '../../../public/asset/image/location.svg';
import { useEffect, useState, useRef } from 'react';
import useStoreApi from '@/app/store/(api)/StoreApi';
import useSearch from '@/app/(hooks)/common/useSearch';
import { getStoreType } from '@/app/type';
import { useParams, usePathname } from 'next/navigation';
import Script from 'next/script';
import { initializeMap } from './mapInitializer';

const TestMap = ({ storeId }: { storeId: string }) => {
  const { fetchData } = useSearch();
  const { StoreDetailInfo } = useStoreApi();
  const [result, setResult] = useState<Array<getStoreType>>([]);
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    const myLocation = async (): Promise<naver.maps.Coord> => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = new naver.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            resolve(currentLocation);
          },
          (error) => {
            reject(error);
          }
        );
      });
    };

    const initializeMap = async () => {
      try {
        const detail = await StoreDetailInfo(Number(storeId));
        const list = await fetchData();

        const fetchedResult = list.length > 0 ? list : [detail.data];
        setResult(fetchedResult);

        const myLatLng = await myLocation();
        let centerLocation: naver.maps.Coord | null = null;

        if (fetchedResult.length > 0) {
          centerLocation = new naver.maps.LatLng(
            fetchedResult[0].latitude,
            fetchedResult[0].longitude
          );
        } else {
          console.log('Result array is empty, using default location');
          centerLocation = myLatLng;
        }

        // if (mapRef.current) {
        //   mapRef.current.destroy();
        //   mapRef.current = null;
        // }

        // Create new map instance
        mapRef.current = new naver.maps.Map('map', {
          center: centerLocation!,
          zoomControl: true,
          zoom: 15,
          minZoom: 6,
          zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.LARGE,
            position: naver.maps.Position.TOP_RIGHT,
          },
        });

        fetchedResult.map((store: getStoreType) => {
          const contentString = [
            '<div>',
            `   <h3>${store.name}</h3>`,
            `   <div>★${store.avgGrade}(${store.totalReviewCount})♥️${store.totalFavoriteCount}</div>`,
            `   <p>${store.address}<br />`,
            `   <div>${store.categoryName ? store.categoryName : ''}</div>`,
            '</div>',
          ].join('');

          const infowindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
            borderColor: '#FFFFA1',
            backgroundColor: '#FFFaEF',
            borderWidth: 3,
            anchorColor: '#EEE',
            anchorSkew: true,
          });

          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(store.latitude, store.longitude),
            map: mapRef.current!,
            title: store.name,
          });

          naver.maps.Event.addListener(marker, 'click', function (e) {
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(mapRef.current!, marker);
            }
          });

          infowindow.open(mapRef.current!, marker);
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };
    initializeMap();
  }, [storeId, result]);

  return (
    <>
      <div id="map"></div>
      {/* Naver Maps API 스크립트 로드 */}
      {/* <Script strategy="beforeInteractive" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5?" onLoad={initializeMap} /> */}
      {/* 현재 위치로 이동 버튼 */}
      {/* <button onClick={() => initializeMap()} className="myLocation">
        <Location width="23" height="23" fill="white" />
      </button> */}
    </>
  );
};

export default TestMap;
