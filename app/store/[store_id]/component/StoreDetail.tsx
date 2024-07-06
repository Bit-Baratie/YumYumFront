'use client'
import useStoreApi from "@/app/store/(api)/StoreApi";
import { useState, useEffect } from "react";
import TestMap from "@/app/store/(component)/NaverMap";
import Bookmarks from "@/public/asset/image/bookmark.svg"
import "@/app/store/[store_id]/storeDetailPage.scss"
import useStore from "@/app/store/(hooks)/useStore";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";


interface store {
  storeId: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageList: Image[],
  categoryList: string[],
  views: number,
  hashtagList: hastagListType[],
  isFavorite: boolean,
  avgGrade: number,
  hours: string,
  calls: string,
  menuList: menuListType[],
}
interface location {
  latitude: number,
  longitude: number,
}
interface Image {
  imageUrl: string; // 이미지의 URL,
}
interface hastagListType {
  id: number,
  content: string
}
interface menuListType {
  id: number,
  name: string,
  price: number
}

interface data {
  isFavorite: boolean,
  storeId: number
}

const StoreDetail = () => {
  const { favoriteHandler, favorite, setFavorite } = useStore();
  const { StoreDetailInfo, postStar } = useStoreApi();
  const [storeList, setStoreList] = useState<store | null>(null);

  const params = useParams() as { store_id: string };
  const storeId = params.store_id;
  console.log("디테일" + params.store_id);

  const data: data = { isFavorite: !favorite, storeId: Number(storeId) }
  useEffect(() => {
    const fetchStoreDetail = async () => {
      const StoreInfoResult = await StoreDetailInfo(Number(storeId));
      setStoreList(StoreInfoResult);
      setFavorite(StoreInfoResult.isFavorite);
      console.log("초기값" + StoreInfoResult.isFavorite);
    };
    if (storeId) {
      fetchStoreDetail();
    }
  }, [storeId]);

  if (!storeList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="storeDetail">
        <div className="storeId">{storeList.storeId}</div>
        <div className="storeImageDetail">
          {/* <div className="MainImage">{storeList.imageList}</div> */}
          <div className="subImageList">
            {/* <div className="subImage">{storeList.imageUrl}</div>
            <div className="subImage" id="sub2">{storeList.imageUrl}</div>
            <div className="subImage">{storeList.imageUrl}</div>
            <div className="subImage">{storeList.imageUrl}</div> */}
            {storeList.imageList.map((image) => (
              <img
                key={image.imageUrl}
                className="subImage"
                src={image.imageUrl}
                alt={`Sub Image ${image.imageUrl + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="storeInfoDetail">
          <div className="storeNameDetail">
            <span>{storeList.name}</span>
            <div>★{storeList.avgGrade}({storeList.reviewCount})</div>
            <div>♥️{storeList.favoriteCount}</div>
            <div>👀{storeList.views}</div>
          </div>
          <div className="storeHour">
            <div>영업시간</div>
            <div>{storeList.hours}</div>
          </div>
          <div className="storeAddress">
            <div>주소</div>
            <div>{storeList.address}</div>
          </div>
          <div className="storeNumber">
            <div>전화번호</div>
            <div>{storeList.calls}</div>
          </div>
        </div>
        <div className="storeHashTag">
          {storeList.hashtagList.map((tag: hastagListType) => {
            return (<div key={tag.id} className='hashTag'>{tag.content}</div>)
          })}
        </div>
        <div id="navBtn">
          <div>리뷰</div>
          <div>길찾기</div>
          <div>신고버튼</div>
        </div>
        <div className="favorite">
          <Bookmarks style={{ fill: favorite ? '#FFC657' : '#E2E2E2', width: '55px', height: '55px' }} onClick={() => { postStar(data); favoriteHandler(storeList.isFavorite); }} />
        </div>
      </div>
      <div className="DetailMap">
        <div className="map">
          <TestMap />
        </div>
        <div className="menu">
          <div className="menuInfo">
            <p>메뉴정보</p>
            <span>더보기+</span>
          </div>
          <div className="menuList">
            <ul>
              {storeList.menuList.map((menu) => (
                <li key={menu.id}>
                  <span className="menuName">{menu.name}</span>
                  <div className="line">--------------------</div>
                  <span className="menuPrice">{menu.price}원</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StoreDetail;