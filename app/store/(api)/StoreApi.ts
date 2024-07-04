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
    hours : string,
    call : string
    menuList:string[],
}
interface LikeInfo{
    isFavorite : boolean
}
interface pageNumber{
    totalPages:number,
    currentPages:number
}

//나의 위도 경도
interface location{
    latitude:number,
    longitude:number,
}

export interface SearchResponse {
    totalPages: number;
    currentPage: number;
    //한 번에 표시할 결과의 수
    limit: number;
    data: store[];
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
return  [{
    id: 1,
    name: "카넬로손파이",
    address:"강남대로 200-1",
    favoriteNumber: 123,
    reviewNumber: 123,
    imageUrl:"/",
    categoryList:["123","456","789"],
    views:12837,
    hashTagList:["123","456","789"],
    isFavorite:false,
    grade:4.5,
    totalPage : 10,
    currentPage:1,
    latitude : 36.5098556,
    longtitude : 127.2431966
},
{
    id: 2,
    name: "청년다방",
    address:"강남대로 200-1",
    favoriteNumber: 123,
    reviewNumber: 123,
    imageUrl:"/",
    categoryList:["123","456","789"],
    views:12837,
    hashTagList:["123","456","789"],
    isFavorite:true,
    grade:4.5,
    totalPage : 10,
    currentPage:1,
    latitude : 36.4098556,
    longtitude : 127.2431966
},{
  id: 3,
  name: "샤브로21",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:false,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.3098556,
  longtitude : 127.2431966
},
{
  id: 4,
  name: "신복면관",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:true,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.2098556,
  longtitude : 127.2431966
},{
  id: 5,
  name: "정용안의리액트쇼",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:false,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.1098556,
  longtitude : 127.2431966
},
{
  id: 6,
  name: "버거킹 강남점",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:true,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.5198556,
  longtitude : 127.2431966
},{
  id: 7,
  name: "평화다방",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:false,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.5298556,
  longtitude : 127.2431966
},
{
  id: 8,
  name: "우대포",
  address:"강남대로 200-1",
  favoriteNumber: 123,
  reviewNumber: 123,
  imageUrl:"/",
  categoryList:["123","456","789"],
  views:12837,
  hashTagList:["123","456","789"],
  isFavorite:true,
  grade:4.5,
  totalPage : 10,
  currentPage:1,
  latitude : 36.5398556,
  longtitude : 127.2431966
},
]
}

export const postStoreLike = async (isFavorite : LikeInfo) => {
    // const result = await axios.post(`http://localhost:3000/star/${storeId}`,isFavorite)
    // .then((res) =>{
    //     return res.data;
    // }).catch((err) =>{
    //     console.log(err);
    //     alert("다시 시도해주세요.");
    // })

    return {
        isFavorite : false
    }
}

export const searchStoreInfo = async (Page : number) => {
    // const result = await axios.get(`http://localhost:3000/store?keyword=${keyword}`)
    // .then((res) =>{
    //    return res.data
    // }).catch((err) =>{
    //    console.log(err);
    //    alert("다시 시도해주세요.");
    // })

    return [
            {
                id: 1,
                name: "카넬로손파이",
                address:"강남대로 200-1",
                favoriteNumber: 123,
                reviewNumber: 123,
                imageUrl:"/",
                categoryList:["123","456","789"],
                views:12837,
                hashTagList:["123","456","789"],
                isFavorite:false,
                grade:4.5,
                totalPage : 10,
                currentPage:1
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
                totalPage : 10,
                currentPage:1
        },{
            id: 3,
            name: "카넬로손파이",
            address:"강남대로 200-1",
            favoriteNumber: 123,
            reviewNumber: 123,
            imageUrl:"/",
            categoryList:["123","456","789"],
            views:12837,
            hashTagList:["123","456","789"],
            isFavorite:false,
            grade:4.5,
            totalPage : 10,
            currentPage:1
        },
        {
            id: 4,
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
            totalPage : 10,
            currentPage:1
    },{
        id: 5,
        name: "카넬로손파이",
        address:"강남대로 200-1",
        favoriteNumber: 123,
        reviewNumber: 123,
        imageUrl:"/",
        categoryList:["123","456","789"],
        views:12837,
        hashTagList:["123","456","789"],
        isFavorite:false,
        grade:4.5,
        totalPage : 10,
        currentPage:1
    },
    {
        id: 6,
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
        totalPage : 10,
        currentPage:1
},{
    id: 7,
    name: "카넬로손파이",
    address:"강남대로 200-1",
    favoriteNumber: 123,
    reviewNumber: 123,
    imageUrl:"/",
    categoryList:["123","456","789"],
    views:12837,
    hashTagList:["123","456","789"],
    isFavorite:false,
    grade:4.5,
    totalPage : 10,
    currentPage:1
},
{
    id: 8,
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
    totalPage : 10,
    currentPage:1
}
    ]
}


export const StoreDetailInfo = async () => {

    // const storeId = 1;
    // const result = await axios.get(`http://localhost:3000/store/${storeId}`)
    // .then((res)=>{
    //     return res.data
    // }).catch((err)=>{
    //     alert("다시 한 번 시도하세요.")
    //     console.log(err);
    // })
        return {
            id: 1,
            hours: "11:00 ~ 21:00",
            name: "카넬로손파이",
            address:"강남대로 200-1",
            favoriteNumber: 123,
            reviewNumber: 123,
            call : "010-6268-4145",
            imageUrl:"/",
            views:12837,
            hashTagList:["강남맛집","여기대박","데이트"],
            isFavorite:true,
            grade:4.5,
            totalPage : 10,
            currentPage:1,
            menuList:[{
                name:"엄마손파이",
                price : "3000원"
            },
            {
                name:"아빠손파이",
                price : "5000원"
            },
            {
                name:"카넬로의 오른손",
                price : "30000원"
            }
        ]
        };
    }
    