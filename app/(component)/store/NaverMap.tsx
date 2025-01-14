"use client";
import "@/app/store/map.scss";
import { useEffect, useRef } from "react";
import { getStoreType, location } from "@/app/type";
import Script from "next/script";
import useSearch from "@/app/(hooks)/common/useSearch";
import { useRouter } from "next/navigation";

const TestMap = ({
  storeInfo,
  myLatLng,
}: {
  storeInfo: getStoreType[];
  myLatLng: location | null;
}) => {
  const router = useRouter();
  const mapRef = useRef<HTMLDivElement>(null);
  let map: naver.maps.Map | null = null;
  const { data } = useSearch();

  const initializeMap = async () => {
    const { naver } = window;
    if (!mapRef.current || !naver) return;

    try {
      console.log(storeInfo);
      //맛집 리스트 지도 설정
      if (storeInfo?.length > 1) {
        map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(
            storeInfo[0]?.latitude,
            storeInfo[0]?.longitude
          ),
          zoomControl: true,
          zoom: 14,
          minZoom: 6,
          zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.medium,
            position: naver.maps.Position.TOP_RIGHT,
          },
        });
        //맛집 상세 지도 설정
      } else if (storeInfo?.length == 1) {
        map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(
            storeInfo[0]?.latitude,
            storeInfo[0]?.longitude
          ),
          zoomontrol: true,
          zoom: 15,
          minZoom: 6,
          zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.LARGE,
            position: naver.maps.Position.TOP_RIGHT,
          },
        });
      }
    } catch (err) {
      console.error(err);
      router.refresh();
    }

    try {
      storeInfo?.map((store: getStoreType) => {
        const contentString = [
          "<div class='infowindow-content'>",
          `   <h3>${store.name}</h3>`,
          `   <div>★${store.avgGrade}(${store.totalReviewCount})&nbsp;♥️${store.totalFavoriteCount}</div>`,
          `   <p>${store.address}<br />`,
          `   <div>${store.categoryList ? store.categoryList : ""}</div></p>`,
          "</div>",
        ].join("");

        const infowindow = new naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          color: "white",
          backgroundColor: "#FFFaEF",
          borderWidth: 0,
          anchorColor: "#ffd786",
          anchorSkew: true,
        });

        if (map) {
          let marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(store.latitude, store.longitude),
            map: map,
            title: store.name,
            // icon: {
            //   url: '/asset/image/defaultImage.png',
            //   size: new naver.maps.Size(100, 100),
            //   origin: new naver.maps.Point(0, 0),
            //   anchor: new naver.maps.Point(25, 26)
            // }
          });
          naver.maps.Event.addListener(marker, "click", function () {
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(map!, marker);
            }
          });

          infowindow.open(map!, marker);
        }
      });
    } catch (err) {
      console.error(err);
      router.refresh();
    }
  };
  useEffect(() => {
    initializeMap();
  }, [storeInfo]);

  return (
    <>
      <div id="map" ref={mapRef}></div>
      <Script
        strategy="afterInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5?"
        onLoad={initializeMap}
      />
    </>
  );
};

export default TestMap;
