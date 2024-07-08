'use client'
import Link from "next/link";
import Item from "./item";
import SlideStyle from './slide.module.scss';
import useHome from "@/app/(hooks)/home/useHome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface StoreType {
  storeId: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageUrl: string,
  avgGrade: number
}

const test = [
  {
    storeId: 1,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  },
  {
    storeId: 2,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  },
  {
    storeId: 3,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  },
  {
    storeId: 4,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  },
  {
    storeId: 5,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  },
  {
    storeId: 6,
    name: 'asd',
    address: 'asd',
    favoriteCount: 1,
    reviewCount: 1,
    imageUrl: 'asd',
    avgGrade: 1
  }
]

const Slide = () => {
  const {
    setLocal,
    select,
    fetchTop10,
    fetchMonth,
    fetchStar,
    fetchViews,
    data} = useHome();
    SwiperCore.use([Navigation]);

  return (
    <div className={SlideStyle.container}>
      <div className={SlideStyle.header}>
        <select name="local" id="local" className={SlideStyle.dropbox} onChange={(e) => setLocal(e.target.value)}>
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
          <option value="충북">충북</option>
          <option value="충남">충남</option>
          <option value="대전">대전</option>
          <option value="세종">세종</option>
          <option value="전북">전북</option>
          <option value="전남">전남</option>
          <option value="광주">광주</option>
          <option value="경북">경북</option>
          <option value="경남">경남</option>
          <option value="부산">부산</option>
          <option value="울산">울산</option>
          <option value="강원">강원</option>
          <option value="제주">제주</option>
        </select>
        <div className={SlideStyle.btnSet}>
          <button onClick={fetchTop10} style={{backgroundColor: select==='top10'? '#FFC657' : 'rgba(0,0,0,0)', color: select==='top10'?'white':'black'}}>TOP10</button>
          <button onClick={fetchMonth} style={{backgroundColor: select==='month'? '#FFC657' : 'rgba(0,0,0,0)', color: select==='month'?'white':'black'}}>이달의 맛집</button>
          <button onClick={fetchStar} style={{backgroundColor: select==='star'? '#FFC657' : 'rgba(0,0,0,0)', color: select==='star'?'white':'black'}}>즐겨찾기 많은 맛집</button>
          <button onClick={fetchViews} style={{backgroundColor: select==='views'? '#FFC657' : 'rgba(0,0,0,0)', color: select==='views'?'white':'black'}}>조회수 많은 맛집</button>
        </div>
      </div>

      <div className={SlideStyle.itemContainer}>
        {/* data */}
        {/* {data?
          <>
            {data.map((item:StoreType) => {
              return(<Item key={item.id} item={item}/>)
            })}
          </>:
          <div>데이터 없음</div>
        } */}
        {/* {test?
          <>
            {test.map((item:StoreType) => {
              return(<Item key={item.id} item={item}/>)
            })}
          </>:
          <div>데이터 없음</div>
        } */}

        <Swiper
          spaceBetween={10}
          navigation={true}
          slidesPerView={5}
          loop={true}
        >
          {data?
          <>
          {data.map((item:StoreType) => {
            return(<SwiperSlide key={item.storeId}>
              <Link href={`/store/${item.storeId}`}>
              <Item item={item}/>
              </Link>
            </SwiperSlide>)
          })}</>:<div>데이터 없음</div>}
        </Swiper>
      </div>
    </div>
  );
}

export default Slide;