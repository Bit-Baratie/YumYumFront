'use client';
import { useState } from 'react';
import Bookmarks from '../../../public/asset/image/bookmark.svg';

interface Store {
    storeName: string;
    storeImage: string;
    grade: number;
    like: number;
    views: number;
    storeAddress: string;
    hashTagList: string[];
}

const StoreInfo: React.FC<Store> = ({
    storeName,
    storeImage,
    grade,
    like,
    views,
    storeAddress,
    hashTagList
}) => {
    const [iconColor, setIconColor] = useState<boolean>(false);

    const enter = () => {
        setIconColor(prevIconColor => !prevIconColor);
    }

    return (
        <div id="searchStoreList">
            <div className="storeImage">
                <img src={storeImage} width={200} height={155} alt="가게이미지1" />
            </div>
            <div className="storeInfo">
                <div className="storeName">
                    <div>{storeName}주먹이 맛있는 집</div>
                </div>
                <div className="gradeLikeViews">
                    <div id="grade">★4.0(99+){grade}</div>
                    <div id="like">♥️20{like}</div>
                    <div id="views">👀18323{views}</div>
                </div>
                <div className="storeAddress">
                    <div>{storeAddress}서울시 강남구 100 - 0 3층</div>
                </div>
                {hashTagList.map(tag => (
                    <div key={tag} className='hashTag'>#{tag}</div>
                ))}
                <div className="favorite">
                    <Bookmarks width='25' height='25' fill={iconColor ? '#FFC657' : '#E2E2E2'} onClick={enter} />
                </div>
            </div>
        </div>
    )
}

export default StoreInfo;
