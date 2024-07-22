"use client";
import useStoreApi from "@/app/store/(api)/StoreApi";
import { useState, useEffect } from "react";
import TestMap from "@/app/store/(component)/NaverMap";
import Bookmarks from "@/public/asset/image/bookmark.svg";
import "@/app/store/[store_id]/storeDetailPage.scss";
import useStore from "@/app/store/(hooks)/useStore";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import ReportModal from "@/app/(component)/reportModal";
import Link from "next/link";
import { getStoreType, favorite } from "@/app/type";
import useModal from "@/app/(hooks)/common/useModal";
import {
  EyeFilled,
  StarFilled,
  SignatureFilled,
  AlertFilled,
} from "@ant-design/icons";
import Navi from "@/public/asset/image/navigation.svg";
import Siren from "@/public/asset/image/siren.svg";
import GoReview from "@/public/asset/image/review.svg";
import Mark from "@/public/asset/image/mark.svg";
import Loading from "@/app/admin/(component)/Loading";
import NoImage from "@/public/asset/image/NoImage.svg";

const StoreDetail = () => {
  const { favoriteHandler, favorite, setFavorite } = useStore();
  const { StoreDetailInfo, postStar } = useStoreApi();
  const [storeDetail, setStoreDetail] = useState<Array<getStoreType>>([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const { modal, setModal, createStoreReport, content, contentHandler } =
    useModal();

  const closeModal = () => {
    setModal(false);
  };

  const params = useParams() as { store_id: string };
  const storeId = params.store_id;

  const data: favorite = {
    favoriteStatus: !favorite,
    storeId: Number(storeId),
  };
  useEffect(() => {
    const fetchStoreDetail = async () => {
      const StoreInfoResult = await StoreDetailInfo(Number(storeId));
      setStoreDetail([StoreInfoResult.data]);
      setFavorite(StoreInfoResult.data.favoriteStatus);
    };
    if (storeId) {
      fetchStoreDetail();
    }
  }, [setStoreDetail]);

  if (storeDetail.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="storeDetail">
        <div className="storeId">{storeDetail[0]?.storeId}</div>
        <div className="storeImageDetail">
          {/* <div className="MainImage">{storeList.imageList}</div> */}
          {storeDetail[0].imageList.length ? (
            <>
              <img className="MainImage" src={storeDetail[0]?.imageList[0]} />
              <div className="subImageList">
                <img className="subImage" src={storeDetail[0]?.imageList[1]} />
                <img
                  className="subImage"
                  id="sub2"
                  src={storeDetail[0]?.imageList[2]}
                />
                <img className="subImage" src={storeDetail[0]?.imageList[3]} />
                <img className="subImage" src={storeDetail[0]?.imageList[4]} />
              </div>
            </>
          ) : (
            <div className="noStore">
              <NoImage width={100} height={100} />
              매장에 등록된 사진이 없습니다.
            </div>
          )}
        </div>
        <div className="storeInfoDetail">
          <div className="storeNameDetail">
            <span>{storeDetail[0]?.name}</span>
            <div>
              <StarFilled className="custum-icon" />
              <div className="smallText">
                {storeDetail[0]?.avgGrade}&nbsp;(
                {storeDetail[0]?.totalReviewCount})
              </div>
            </div>
            <div>
              <Mark className="custum-icon" />
              <div className="smallText">
                {storeDetail[0]?.totalFavoriteCount}
              </div>
            </div>
            <div>
              <EyeFilled className="custum-icon" />
              <div className="smallText">{storeDetail[0]?.views}</div>
            </div>
          </div>
          <div className="storeHour">
            <div className="fix">영업시간</div>
            <div className="fix2">{storeDetail[0]?.hours}</div>
          </div>
          <div className="storeAddress">
            <div className="fix">주소</div>
            <div className="fix2">{storeDetail[0]?.address}</div>
          </div>
          <div className="storeNumber">
            <div className="fix">전화번호</div>
            <div className="fix2">{storeDetail[0]?.calls}</div>
          </div>
        </div>
        {(storeDetail[0]?.hashtagList && (
          <div className="storeHashTag">
            {storeDetail[0].hashtagList?.map((tag, index) => (
              <div key={index} className="hashTag">
                {tag}
              </div>
            ))}
          </div>
        )) ||
          (!storeDetail[0]?.hashtagList && <div>Loading...</div>)}
        <div id="navBtn">
          <Link
            href={`/review/write?storeId=${storeDetail[0]?.storeId}&storeName=${storeDetail[0]?.name}`}
          >
            <SignatureFilled className="review-icon" />
          </Link>
          <a
            target="_blank"
            href={`https://map.naver.com/p/search/${storeDetail[0]?.name}`}
          >
            <Navi className="navi-icon" />
          </a>
          <div
            onClick={() => {
              setModal(true);
            }}
          >
            <AlertFilled className="siren-icon" />
          </div>
        </div>
        {modal && (
          <ReportModal
            onClose={() => closeModal()}
            targetId={storeDetail[0]?.storeId}
            createReport={createStoreReport}
            content={content}
            contentHandler={contentHandler}
          />
        )}
        <div className="favorite">
          <Bookmarks
            className="bookmark"
            style={{
              fill: favorite ? "#FFC657" : "#E2E2E2",
              width: "55px",
              height: "65px",
              // stroke: "white",
            }}
            onClick={() => {
              postStar(data);
              favoriteHandler(storeDetail[0]?.favoriteStatus);
            }}
          />
        </div>
      </div>
      <div className="DetailMap">
        <div className="map">
          <TestMap storeInfo={storeDetail} myLatLng={null} />
        </div>
        <div className="menu">
          <div className="menuInfo">
            <p>메뉴정보</p>
            <span onClick={() => setMenuStatus(true)}>더보기+</span>
          </div>
          <div className="menuList">
            <ul>
              {(menuStatus == true && (
                <>
                  {storeDetail[0].menuList.map((menu) => (
                    <li key={menu.id}>
                      <div className="menuLine">
                        <span className="menuName">{menu.name}</span>
                        <div className="line"></div>
                        <span className="menuPrice">{menu.price}원</span>
                      </div>
                    </li>
                  ))}
                </>
              )) ||
                (menuStatus == false && (
                  <div className="menuList">
                    <ul>
                      <>
                        {storeDetail[0].menuList.length > 0 ? (
                          <li>
                            <span className="menuName">
                              {storeDetail[0]?.menuList[0].name}
                            </span>
                            <div className="line">--------------------</div>
                            <span className="menuPrice">
                              {storeDetail[0]?.menuList[0].price}원
                            </span>
                          </li>
                        ) : (
                          ""
                        )}
                        {storeDetail[0].menuList.length > 1 ? (
                          <li>
                            <span className="menuName">
                              {storeDetail[0]?.menuList[1].name}
                            </span>
                            <div className="line">--------------------</div>
                            <span className="menuPrice">
                              {storeDetail[0]?.menuList[1].price}원
                            </span>
                          </li>
                        ) : (
                          ""
                        )}
                        {storeDetail[0].menuList.length > 2 ? (
                          <li>
                            <span className="menuName">
                              {storeDetail[0]?.menuList[2].name}
                            </span>
                            <div className="line">--------------------</div>
                            <span className="menuPrice">
                              {storeDetail[0]?.menuList[2].price}원
                            </span>
                          </li>
                        ) : (
                          ""
                        )}
                      </>
                    </ul>
                  </div>
                )) ||
                (storeDetail[0]?.menuList && (
                  <>
                    <div>메뉴 정보가 존재하지 않습니다</div>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreDetail;
