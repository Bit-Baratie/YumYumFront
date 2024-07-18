"use client";
import "@/app/store/(component)/map.scss";
import { useEffect, useRef } from "react";
import { getStoreType, location } from "@/app/type";
import Script from "next/script";
import useSearch from "@/app/(hooks)/common/useSearch";

const TestMap = ({
  storeInfo,
  myLatLng,
}: {
  storeInfo: getStoreType[];
  myLatLng: location | null;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  let map: naver.maps.Map | null = null;
  const { data } = useSearch();

  const initializeMap = async () => {
    const { naver } = window;
    if (!mapRef.current || !naver) return;

    console.log(storeInfo);
    if (storeInfo?.length > 1) {
      map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLatLng?.latitude, myLatLng?.longitude),
        zoomControl: true,
        zoom: 15,
        minZoom: 6,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.LARGE,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
    } else if (storeInfo?.length == 1) {
      map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(
          storeInfo[0]?.latitude,
          storeInfo[0]?.longitude
        ),
        zoomControl: true,
        zoom: 15,
        minZoom: 6,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.LARGE,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
    }

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
        backgroundColor: "#FFFaEF",
        borderWidth: 0,
        anchorColor: "white",
        anchorSkew: true,
      });

      if (map) {
        let marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(store.latitude, store.longitude),
          map: map,
          title: store.name,
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
