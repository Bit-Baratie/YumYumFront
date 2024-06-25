'use client';
import axios from "axios";
import { getStoreInfo } from "../(api)/StoreApi";
import StoreInfo from "./StoreInfo";
import { useEffect, useState } from "react";

interface Store {
  id: number;
  name: string;
  address: string;
  favoriteNumber: number;
  reviewNumber: number;
  imageUrl: string;
  categoryList: string[];
  views: number;
  hashTagList: string[];
  isFavorite: boolean;
  grade: number;
}

const StoreList: React.FC = () => {
  const [storeList, setStoreList] = useState<Store[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Store[]>('http://localhost:3000/stores');
        setStoreList(response.data);
      } catch (error) {
        console.error('Error fetching store list:', error);
      }
    };

    fetchData();
  }, []);

  if (storeList.length === 0) {
    return (
      <div id="storeList">
        <div id="searchStoreNumber">
          <div><span>0</span>건의 검색결과가 있습니다.</div>
        </div>
        <div id="noDataMessage">
          <div id="noDataImage" />
          <div id="noDataInfo">
            <div className="noDataInfo" />
            <div className="noDataInfo" />
            <div className="noDataInfo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="storeList">
      <div id="searchStoreNumber">
        {/* Span에 검색결과 계산해서 가져와야함 */}
        <div><span>28</span>건의 검색결과가 있습니다.</div>
      </div>
      <div className="StoreListMap">
        {storeList.map(store => (
          <StoreInfo
            key={store.id}
            storeName={store.name}
            storeImage={store.imageUrl}
            grade={store.grade}
            like={store.favoriteNumber}
            views={store.views}
            storeAddress={store.address}
            hashTagList={store.hashTagList}
          />
        ))}
      </div>
    </div>
  );
};
export default StoreList;
