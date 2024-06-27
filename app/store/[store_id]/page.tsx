import TestMap from "@/app/store/(component)/NaverMap";
import SearchStoreList from "@/app/store/(component)/SearchStoreList";
import "@/app/store/[store_id]/storeDetailPage.scss"
const Store = () => {
  return (
    <>
      <div className="container">
        <div className="storeDetail">
          <div className="storeImageDetail">
            <div className="MainImage">Main</div>
            <div className="subImageList">
              <div className="subImage">1</div>
              <div className="subImage" id="sub2">2</div>
              <div className="subImage">3</div>
              <div className="subImage">4</div>
            </div>
          </div>
          <div className="storeInfoDetail">
            <div className="storeNameDetail">
              <span>엄마손파이리</span>
              <div>4.0(99+) 60 1723848</div>
            </div>
            <div className="storeHour">
              <div>영업시간</div>
              <div>11:30 ~ 22:00</div>
            </div>
            <div className="storeAddress">
              <div>주소</div>
              <div>서울 강남구 강남대로 102길 29 예촌빌딩</div>
            </div>
            <div className="storeNumber">
              <div>전화번호</div>
              <div>02-6933-9501</div>
            </div>
          </div>
          <div className="storeHashTag">
            <div>#주차 가능</div>
            <div>#강남 맛집</div>
            <div>#엄마 손맛</div>
            <div>#ㅇㄱㄹㅇ</div>
          </div>
          <div id="navBtn">
            <div>리뷰</div>
            <div>길찾기</div>
            <div>신고버튼</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
