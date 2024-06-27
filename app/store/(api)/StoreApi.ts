'use client';
import axios from "axios";
import MyLocation from "../(component)/MyLocation";

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
    latitude:number,
    longitude:number,
}


export const getStoreInfo = async (location : location) => {
// const result : Array<store> = await axios.get(`http://localhost:3000/store?long=${location.longitude}&&lat=${location.latitude}`)
// .then((res) =>{
//     return res.data;
// }).catch((err) => {
//     console.log(err);
//     alert("다시 시도해주세요.");
// });

//store 정보
return[{
    id: 1,
    name: "카넬로손파이",
    address:"강남대로 200-1",
    favoriteNumber: 123,
    reviewNumber: 123,
    imageUrl:"/",
    categoryList:["123","456","789"],
    views:12837,
    hashTagList:["123","456","789"],
    isFavorite:true,
    grade:4.5,
},
{
    id: 2,
    name: "카넬로손파이",
    address:"강남대로 200-1",
    favoriteNumber: 123,
    reviewNumber: 123,
    imageUrl:"/",
    categoryList:["123","456","789"],
    views:12837,
    hashTagList:["123","456","789"],
    isFavorite:true,
    grade:4.5,
}
]
}
