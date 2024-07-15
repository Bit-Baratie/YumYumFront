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
import { getStoreType } from "@/app/type";
import CardSkeleton from "../skeleton/card";

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
        {data?
        <Swiper
          spaceBetween={10}
          navigation={true}
          slidesPerView={data?.length>5?5:data.length}
          // centeredSlides={true}
          loop={true}
        >
          {data?
          <>
          {data.map((item:getStoreType) => {
            return(<SwiperSlide key={item.storeId}>
                <Item item={item}/>
            </SwiperSlide>)
          })}</>:<div>데이터 없음</div>}
        </Swiper>: <CardSkeleton/>}
      </div>
    </div>
  );
}

export default Slide;