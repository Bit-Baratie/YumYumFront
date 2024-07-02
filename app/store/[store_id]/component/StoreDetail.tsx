'use client'
import { StoreDetailInfo } from "@/app/store/(api)/StoreApi";
import { useState, useEffect } from "react";
import TestMap from "@/app/store/(component)/NaverMap";

interface store {
    id: number;
    name: string;
    address: string;
    favoriteNumber: number;
    reviewNumber: number;
    imageUrl: string;
    views: number;
    hashTagList: string[];
    grade: number;
    isFavorite: boolean;
    hours: string,
    call: string
    menuList: menuList[];
}
interface menuList {
    name: string,
    price: string
}


const StoreDetail = () => {

    const [storeList, setStoreList] = useState<store | null>(null);

    useEffect(() => {
        const fetchStoreDetail = async () => {
            const StoreInfoResult: store = await StoreDetailInfo()
            setStoreList(StoreInfoResult);
        }
        fetchStoreDetail();
    }, [])

    if (!storeList) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="storeDetail">
                <div className="storeImageDetail">
                    <div className="storeId">{storeList.id}</div>
                    <div className="MainImage">{storeList.imageUrl}</div>
                    <div className="subImageList">
                        <div className="subImage">{storeList.imageUrl}</div>
                        <div className="subImage" id="sub2">{storeList.imageUrl}</div>
                        <div className="subImage">{storeList.imageUrl}</div>
                        <div className="subImage">{storeList.imageUrl}</div>
                    </div>
                </div>
                <div className="storeInfoDetail">
                    <div className="storeNameDetail">
                        <span>{storeList.name}</span>
                        <div>★{storeList.grade}({storeList.reviewNumber})</div>
                        <div>♥️{storeList.favoriteNumber}</div>
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
                        <div>{storeList.call}</div>
                    </div>
                </div>
                <div className="storeHashTag">
                    {storeList.hashTagList.map((tag: string) => (
                        <div key={tag} className='hashTag'>#{tag}</div>
                    ))}
                </div>
                <div id="navBtn">
                    <div>리뷰</div>
                    <div>길찾기</div>
                    <div>신고버튼</div>
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
                            {storeList.menuList.map((menu, number) => (
                                <li key={number}>
                                    <span className="menuName">{menu.name}</span>
                                    <div className="line">--------------------</div>
                                    <span className="menuPrice">{menu.price}</span>
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