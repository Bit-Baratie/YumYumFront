import TestMap from "../(api)/testMap"
import Bookmarks from '../../../public/asset/image/bookmark.svg'
import Image from "next/image"
import myLocation from "./MyLocation"

const SearchStoreList = () => {
    return (
        <div className="container">
            <div className="content">
                <TestMap />
                <div id="storeList">
                    <div id="searchStoreNumber">
                        <p><span>28</span>건의 검색결과가 있습니다.</p>
                    </div>
                    <div id="searchStoreList">
                        <div className="storeImage">
                            <Image alt="가게이미지1" src="/asset/image/storeImage1.png" width={200} height={155} />
                        </div>
                        <div className="storeInfo">
                            <div className="storeName">
                                <p>주먹이 맛있다고 소문난 집</p>
                            </div>
                            <div className="gradeLikeViews">
                                <div id="grade">★4.0(99+)</div>
                                <div id="like">♥️20</div>
                                <div id="views">👀18323</div>
                            </div>
                            <div className="storeAddress">
                                <p>서울시 강남구 100 - 0 3층</p>
                            </div>
                            <div className="hashTagList">
                                <div className="hashTag">#가성비</div>
                                <div className="hashTag">#소개팅</div>
                                <div className="hashTag">#파스타</div>
                            </div>
                            <div className="favorite">
                                <Bookmarks width='25' height='25' fill='#FFC657' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchStoreList;