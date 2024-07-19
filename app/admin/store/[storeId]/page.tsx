'use client'
import "@/app/admin/comment/comment.module.scss";
import storeRegister from "@/app/admin/store/register/storeRegister.module.scss";
import useRegister from "../(hooks)/useRegister";
import Link from "next/link";
import useImage from "@/app/(hooks)/common/useImage";
import { CameraFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useStoreApi from "@/app/store/(api)/StoreApi";
import { useParams } from "next/navigation";
import { getStoreType } from "@/app/type";

const StoreModify = () => {
  const params = useParams()
  const { StoreDetailInfo } = useStoreApi();

  const { storeName, storeHours, menuList, priceList, storeAddress, storeCalls, storeHashTag,
    fileInput, storeCategory, inputHashTag, storeMenuList,
    setStoreName, setStoreHours, setMenuList, setPriceList, setStoreAddress, setStoreCalls, setStoreHashTag,
    setStoreCategory, setStoreMenuList, setStoreId, hashTagDelHandler,
    inputHashTagHandler, storeNameHandler, storeHoursHandler, storeAddressHandler,
    storeCallsHandler, storeHashTagHandler, modify, menuDelHandler,
    storeCategoryHandler, menuListHandler, priceListHandler, storeMenuListHandler } = useRegister();
  const { imageHandler, preview, image, removeImg, setPreview } = useImage();
  // const [storeInfo, setStoreInfo] = useState<getStoreType | null>(null);

  useEffect(() => {
    const storeUpdate = async () => {
      const storeId = params.storeId;
      const result = await StoreDetailInfo(Number(storeId));
      // setStoreInfo(result.data);


      setStoreName(result.data.name);
      setStoreHours(result.data.hours);
      setMenuList(result.data.menuList.name);
      setPriceList(result.data.menuList.price);
      setStoreAddress(result.data.address);
      setStoreCalls(result.data.calls);
      setStoreCategory(result.data.category);
      setStoreMenuList(result.data.menuList);
      setStoreHashTag(result.data.hashtagList);
      setStoreId(Number(params.storeId));
      setPreview(result.data.imageList);

    }
    storeUpdate();
  }, [])


  return (
    <div>
      <div className={storeRegister.container}>
        <div className={storeRegister.storeDetail}>
          <div className={storeRegister.storeImageDetail}>
            <label className={storeRegister.fileInput} htmlFor="fileInput">
              <div >
                <CameraFilled style={{ marginRight: "10px", fontSize: 50 }} />
                <br />최대 5장까지 가능합니다</div>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={imageHandler}
              multiple
              accept="image/*"
            />
            <img className={storeRegister.MainImage} alt="main1" src={preview[0]} onClick={() => removeImg(0)}></img>
            <div className={storeRegister.subImageList}>
              <img src={preview[1]} className={storeRegister.subImage} alt="sub1" onClick={() => removeImg(1)} />
              <img src={preview[2]} className={storeRegister.subImage} alt="sub2" onClick={() => removeImg(2)} />
              <img src={preview[3]} className={storeRegister.subImage} alt="sub3" onClick={() => removeImg(3)} />
              <img src={preview[4]} className={storeRegister.subImage} alt="sub4" onClick={() => removeImg(4)} />
            </div>
          </div>
          <div className={storeRegister.storeInfoDetail}>
            <div className={storeRegister.nameDetail}>
              <span>매장이름</span>
              <input type="text" className={storeRegister.inputInfo} defaultValue={storeName} onChange={storeNameHandler} />
            </div>
            <div className="storeHour">
              <div>영업시간</div>
              <input type="text" className={storeRegister.inputInfo} defaultValue={storeHours} onChange={storeHoursHandler} />
            </div>
            <div className="storeAddress">
              <div>주소</div>
              <input type="text" className={storeRegister.inputInfo} defaultValue={storeAddress} onChange={storeAddressHandler} />
            </div>
            <div className="storeNumber">
              <div>전화번호</div>
              <input type="text" className={storeRegister.inputInfo} defaultValue={storeCalls} onChange={storeCallsHandler} />
            </div>
            <div className="storeNumber">
              <div>카테고리</div>
              <input type="text" className={storeRegister.inputInfo} defaultValue={storeCategory} onChange={storeCategoryHandler} />
            </div>
            <div className={storeRegister.storeHashTag}>
              <div>해시태그</div>
              <div className={storeRegister.input}>
                <input type="text" maxLength={4} placeholder="   #을 제외한 내용만 입력해주세요(최대3개)" defaultValue={inputHashTag} className={storeRegister.inputInfo} onChange={(e) => inputHashTagHandler(e)} />
                <button className={storeRegister.hashTagBtn} type="submit" onClick={storeHashTagHandler}>+</button>
              </div>
            </div>
            {/* 입력한 해시태그 목록 */}
            <div className={storeRegister.hashTagList}>
              {storeHashTag?.map((hashTag, index) => (
                <div key={index}>#{hashTag}  <button className={`${storeRegister.menuDelBtn} ${storeRegister.buttonStyle}`} onClick={() => hashTagDelHandler(index)}>-</button></div>
              ))}
            </div>
          </div>
        </div>
        {/* 메뉴등록 */}
        <div className={storeRegister.menuRegister}>
          <div className={storeRegister.title}>메뉴<button type="submit" className={`${storeRegister.menuBtn} ${storeRegister.buttonStyle}`} onClick={storeMenuListHandler}>+</button></div>
          <div className={storeRegister.menuList}>
            <div className={storeRegister.menuPrice}>
              <div>메뉴명</div>
              <input type="text" value={menuList} className={storeRegister.inputMenu} onChange={(e) => menuListHandler(e)} />
            </div>
            <div className={storeRegister.menuPriceInfo}>
              <div>가격</div>
              <input type="text" value={priceList} className={`${storeRegister.inputPrice} ${storeRegister.input}`} onChange={(e) => priceListHandler(e)} />
            </div>
          </div>
          <div className={storeRegister.menuInfo}>
            <div className={storeRegister.registerMenu}>
              <div className={storeRegister.menu}>
                {storeMenuList?.map((menu, index) => (
                  <div key={index}>{menu.name}</div>
                ))}
              </div>
              <div className={storeRegister.price}>
                {storeMenuList?.map((price, index) => (
                  <>
                    <div className={storeRegister.delBtn} key={index}>{price.price}원
                      <button className={`${storeRegister.menuDelBtn} ${storeRegister.buttonStyle}`} onClick={() => menuDelHandler(price.id)}>-</button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={storeRegister.buttonList}>
        <button type="button" className={`${storeRegister.register} ${storeRegister.buttonStyle}`} onClick={() => modify(image)}>수정</button>
        <Link href={"/admin/store"}><button type="button" className={`${storeRegister.cancel} ${storeRegister.buttonStyle}`}>취소</button></Link>
      </div>
    </div>
  );
};

export default StoreModify;
