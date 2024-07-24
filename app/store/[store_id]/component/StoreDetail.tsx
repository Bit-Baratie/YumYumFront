"use client";
import useStoreApi from "@/app/store/(api)/StoreApi";
import { useState, useEffect } from "react";
import TestMap from "@/app/store/(component)/NaverMap";
import Bookmarks from "@/public/asset/image/bookmark.svg";
import detailScss from "@/app/store/[store_id]/storeDetailPage.module.scss";
import useStore from "@/app/store/(hooks)/useStore";
import { useParams } from "next/navigation";
import ReportModal from "@/app/(component)/reportModal";
import Link from "next/link";
import { getStoreType, favorite } from "@/app/type";
import useModal from "@/app/(hooks)/common/useModal";
import detailMap from "@/app/store\/[store_id]/storeDetailMap.module.scss";
import {
  EyeFilled,
  StarFilled,
  SignatureFilled,
  AlertFilled,
} from "@ant-design/icons";
import Navi from "@/public/asset/image/navigation.svg";
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
    <div className={detailScss.container}>
      <div className={detailScss.storeDetail}>
        <div className={detailScss.storeId}>{storeDetail[0]?.storeId}</div>
        <div className={detailScss.storeImageDetail}>
          {/* <div className="MainImage">{storeList.imageList}</div> */}
          {storeDetail[0].imageList.length ? (
            <>
              <img className={detailScss.MainImage} src={storeDetail[0]?.imageList[0]} />
              <div className={detailScss.subImageList}>
                <img className={detailScss.subImage} src={storeDetail[0]?.imageList[1]} />
                <img
                  className={detailScss.subImage}
                  id={detailScss.sub2}
                  src={storeDetail[0]?.imageList[2]}
                />
                <img className={detailScss.subImage} src={storeDetail[0]?.imageList[3]} />
                <img className={detailScss.subImage} src={storeDetail[0]?.imageList[4]} />
              </div>
            </>
          ) : (
            <div className={detailScss.noStore}>
              <NoImage width={100} height={100} />
              매장에 등록된 사진이 없습니다.
            </div>
          )}
        </div>
        <div className={detailScss.storeInfoDetail}>
          <div className={detailScss.storeNameDetail}>
            <span>{storeDetail[0]?.name}</span>
            <div>
              <StarFilled className={detailScss.customIcon} />
              <div className={detailScss.smallText}>
                {storeDetail[0]?.avgGrade}&nbsp;(
                {storeDetail[0]?.totalReviewCount})
              </div>
            </div>
            <div>
              <Mark className={detailScss.customIcon} />
              <div className={detailScss.smallText}>
                {storeDetail[0]?.totalFavoriteCount}
              </div>
            </div>
            <div>
              <EyeFilled className={detailScss.customIcon} />
              <div className={detailScss.smallText}>{storeDetail[0]?.views}</div>
            </div>
          </div>
          <div className={detailScss.storeHour}>
            <div className={detailScss.fix}>영업시간</div>
            <div className={detailScss.fix2}>{storeDetail[0]?.hours}</div>
          </div>
          <div className={detailScss.storeAddress}>
            <div className={detailScss.fix}>주소</div>
            <div className={detailScss.fix2}>{storeDetail[0]?.address}</div>
          </div>
          <div className={detailScss.storeNumber}>
            <div className={detailScss.fix}>전화번호</div>
            <div className={detailScss.fix2}>{storeDetail[0]?.calls}</div>
          </div>
        </div>
        {(storeDetail[0]?.hashtagList && (
          <div className={detailScss.storeHashTag}>
            {storeDetail[0].hashtagList?.map((tag, index) => (
              <div key={index} className={detailScss.hashTag}>
                #{tag}
              </div>
            ))}
          </div>
        )) ||
          (!storeDetail[0]?.hashtagList && <div>Loading...</div>)}
        <div id={detailScss.navBtn}>
          <Link
            href={`/review/write?storeId=${storeDetail[0]?.storeId}&storeName=${storeDetail[0]?.name}`}
          >
            <SignatureFilled className={detailScss.revieIcon} />
          </Link>
          <a
            target="_blank"
            href={`https://map.naver.com/p/search/${storeDetail[0]?.name}`}
          >
            <Navi className={detailScss.naviIcon} />
          </a>
          <div
            onClick={() => {
              setModal(true);
            }}
          >
            <AlertFilled className={detailScss.sirenIcon} />
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
        <div className={detailScss.favorite}>
          <Bookmarks
            className={detailScss.bookmark}
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
      <div className={detailMap.DetailMap}>
        <div className={detailMap.map}>
          <TestMap storeInfo={storeDetail} myLatLng={null} />
        </div>
        <div className={detailMap.menu}>
          <div className={detailMap.menuInfo}>
            <p>메뉴정보</p>
            <span onClick={() => setMenuStatus(true)}>더보기+</span>
          </div>
          <div className={detailMap.menuList}>
            <ul>
              {(menuStatus == true && (
                <>
                  {storeDetail[0].menuList.map((menu) => (
                    <li key={menu.id}>
                      <div className={detailMap.menuLine}>
                        <span className={detailMap.menuName}>{menu.name}</span>
                        <div className={detailMap.line}></div>
                        <span className={detailMap.menuPrice}>{menu.price}원</span>
                      </div>
                    </li>
                  ))}
                </>
              )) ||
                (menuStatus == false && (
                  <div className={detailMap.menuList}>
                    <ul>
                      <>
                        {storeDetail[0].menuList.length > 0 ? (
                          <li>
                            <span className={detailMap.menuName}>
                              {storeDetail[0]?.menuList[0].name}
                            </span>
                            <div className={detailMap.line}>--------------------</div>
                            <span className={detailMap.menuPrice}>
                              {storeDetail[0]?.menuList[0].price}원
                            </span>
                          </li>
                        ) : (
                          ""
                        )}
                        {storeDetail[0].menuList.length > 1 ? (
                          <li>
                            <span className={detailMap.menuName}>
                              {storeDetail[0]?.menuList[1].name}
                            </span>
                            <div className={detailMap.line}>--------------------</div>
                            <span className={detailMap.menuPrice}>
                              {storeDetail[0]?.menuList[1].price}원
                            </span>
                          </li>
                        ) : (
                          ""
                        )}
                        {storeDetail[0].menuList.length > 2 ? (
                          <li>
                            <span className={detailMap.menuName}>
                              {storeDetail[0]?.menuList[2].name}
                            </span>
                            <div className={detailMap.line}>--------------------</div>
                            <span className={detailMap.menuPrice}>
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
