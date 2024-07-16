'use client'
import useStoreApi from "@/app/store/(api)/StoreApi";
import { useState, useEffect } from "react";
import TestMap from "@/app/store/(component)/NaverMap";
import Bookmarks from "@/public/asset/image/bookmark.svg"
import "@/app/store/[store_id]/storeDetailPage.scss"
import useStore from "@/app/store/(hooks)/useStore";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import ReportModal from "@/app/(component)/reportModal";
import Link from "next/link";
import { getStoreType, favorite } from "@/app/type";
import useModal from "@/app/(hooks)/common/useModal";



const StoreDetail = () => {
  const { favoriteHandler, favorite, setFavorite } = useStore();
  const { StoreDetailInfo, postStar } = useStoreApi();
  const [storeDetail, setStoreDetail] = useState<Array<getStoreType>>([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const { modal, setModal, createStoreReport, content, contentHandler } = useModal();


  const closeModal = () => {
    setModal(false);
  }

  const params = useParams() as { store_id: string };
  const storeId = params.store_id;

  const data: favorite = { favoriteStatus: !favorite, storeId: Number(storeId) }
  useEffect(() => {
    const fetchStoreDetail = async () => {
      const StoreInfoResult = await StoreDetailInfo(Number(storeId));
      setStoreDetail(Array(StoreInfoResult.data));
      setFavorite(StoreInfoResult.favoriteStatus);
    };
    if (storeId) {
      fetchStoreDetail();
    }
  }, [setStoreDetail]);

  if (!storeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="storeDetail">
        <div className="storeId">{storeDetail[0]?.storeId}</div>
        <div className="storeImageDetail">
          {/* <div className="MainImage">{storeList.imageList}</div> */}
          <div className="subImageList">
            {/* <div className="subImage">{storeList.imageUrl}</div>
            <div className="subImage" id="sub2">{storeList.imageUrl}</div>
            <div className="subImage">{storeList.imageUrl}</div>
            <div className="subImage">{storeList.imageUrl}</div> */}
            {/* {storeList.imageList.map((image) => (
              <img
                key={image.imageUrl}
                className="subImage"
                src={image.imageUrl}
                alt={`Sub Image ${image.imageUrl + 1}`}
              />
            ))} */}
          </div>
        </div>
        <div className="storeInfoDetail">
          <div className="storeNameDetail">
            <span>{storeDetail[0]?.name}</span>
            <div>★{storeDetail[0]?.avgGrade}({storeDetail[0]?.totalReviewCount})</div>
            <div>♥️{storeDetail[0]?.totalFavoriteCount}</div>
            <div>👀{storeDetail[0]?.views}</div>
          </div>
          <div className="storeHour">
            <div>영업시간</div>
            <div>{storeDetail[0]?.hours}</div>
          </div>
          <div className="storeAddress">
            <div>주소</div>
            <div>{storeDetail[0]?.address}</div>
          </div>
          <div className="storeNumber">
            <div>전화번호</div>
            <div>{storeDetail[0]?.calls}</div>
          </div>
        </div>
        <div className="storeHashTag">
          {storeDetail[0]?.hashtags?.map((tag, index) => {
            return (<div key={index} className='hashTag'>{tag}</div>)
          })}
        </div>
        <div id="navBtn">
          <Link href={`/review/write?storeId=${storeDetail[0]?.storeId}&storeName=${storeDetail[0]?.name}`}>리뷰</Link>
          <a target="_blank" href={`https://map.naver.com/p/search/${storeDetail[0]?.name}`}>길찾기</a>
          <div onClick={() => { setModal(true) }}>신고버튼</div>
        </div>
        {modal && <ReportModal onClose={() => closeModal()} targetId={storeDetail[0]?.storeId} createReport={createStoreReport} content={content} contentHandler={contentHandler} />}
        <div className="favorite">
          <Bookmarks style={{ fill: favorite ? '#FFC657' : '#E2E2E2', width: '55px', height: '55px' }} onClick={() => { postStar(data); favoriteHandler(storeDetail[0]?.favoriteStatus); }} />
        </div>
      </div>
      <div className="DetailMap">
        <div className="map">
          <TestMap storeInfo={storeDetail}
            myLatLng={null} />
        </div>
        <div className="menu">
          <div className="menuInfo">
            <p>메뉴정보</p>
            <span onClick={() => setMenuStatus(true)}>더보기+</span>
          </div>
          <div className="menuList">
            <ul>
              {menuStatus == true &&
                <>
                  {
                    storeDetail[0].menuList.map((menu) => (
                      <li key={menu.id}>
                        <span className="menuName">{menu.name}</span>
                        <div className="line">--------------------</div>
                        <span className="menuPrice">{menu.price}원</span>
                      </li>
                    ))
                  }
                </>
                // || menuStatus == false &&
                // <div className="menuList">
                //   <ul>
                //     <>
                //       <li>
                //         <span className="menuName">{storeList.menuList[0].name}</span>
                //         <div className="line">--------------------</div>
                //         <span className="menuPrice">{storeList.menuList[0].price}원</span>
                //       </li>
                //       <li>
                //         <span className="menuName">{storeList.menuList[1].name}</span>
                //         <div className="line">--------------------</div>
                //         <span className="menuPrice">{storeList.menuList[1].price}원</span>
                //       </li>
                //       <li>
                //         <span className="menuName">{storeList.menuList[2].name}</span>
                //         <div className="line">--------------------</div>
                //         <span className="menuPrice">{storeList.menuList[2].price}원</span>
                //       </li>
                //     </>
                //   </ul>
                // </div>
                // || storeList.menuList &&
                // <>
                //   <div>메뉴 정보가 존재하지 않습니다</div>
                // </>
              }
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
export default StoreDetail;