'use client';
import axios from "axios";

interface store{
    id: number,
    name: string,
    address:string,
    favoriteNumber:number,
    reviewNumber:number,
    imageUrl:string,
    categoryList:string[],
    views:number,
    hashTagList:string[],
    isFavorite:boolean,
    grade:number,
}
//나의 위도 경도
interface location{
    longitude:number,
    latitude:number,
}

export const getStoreInfo = async (location : location) => {
const result : store = await axios.get(`http://localhost:3000/store?long=${location.longitude}&&lat=${location.latitude}`)
.then((res) =>{
    return res.data;
}).catch((err) => {
    console.log(err);
    alert("다시 시도해주세요.");
});

//store 정보
return result;
}
