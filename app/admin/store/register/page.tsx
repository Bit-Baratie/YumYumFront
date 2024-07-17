'use client'
import "@/app/admin/comment/comment.module.scss";
import "@/app/admin/store/register/storeRegister.scss";
import useRegister from "../(hooks)/useRegister";
import Link from "next/link";
import useImage from "@/app/(hooks)/common/useImage";
import { CameraFilled } from "@ant-design/icons";

const StoreRegister = () => {

  const { storeName, storeHours, menuList, priceList, storeAddress, storeCalls, storeHashTag,
    fileInput, storeCategory, inputHashTag, storeMenuList,
    inputHashTagHandler, storeNameHandler, storeHoursHandler, storeAddressHandler,
    storeCallsHandler, storeHashTagHandler, register, menuDelHandler,
    storeCategoryHandler, menuListHandler, priceListHandler, storeMenuListHandler } = useRegister();
  const { imageHandler, preview, image, removeImg } = useImage();


  return (
    <div>
      <div className="container">
        <div className="storeDetail">
          <div className="storeImageDetail">
            <label className="fileInput" htmlFor="fileInput">
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
            <img className="MainImage" alt="main1" src={preview[0]} onClick={() => removeImg(0)}></img>
            <div className="subImageList">
              <img src={preview[1]} className="subImage" alt="sub1" onClick={() => removeImg(1)} />
              <img src={preview[2]} className="subImage" alt="sub2" onClick={() => removeImg(2)} />
              <img src={preview[3]} className="subImage" alt="sub3" onClick={() => removeImg(3)} />
              <img src={preview[4]} className="subImage" alt="sub4" onClick={() => removeImg(4)} />
            </div>
          </div>
          <div className="storeInfoDetail">
            <div className="storeNameDetail">
              <span>매장이름</span>
              <input type="text" className="inputInfo" value={storeName} onChange={storeNameHandler} />
            </div>
            <div className="storeHour">
              <div>영업시간</div>
              <input type="text" className="inputInfo" value={storeHours} onChange={storeHoursHandler} />
            </div>
            <div className="storeAddress">
              <div>주소</div>
              <input type="text" className="inputInfo" value={storeAddress} onChange={storeAddressHandler} />
            </div>
            <div className="storeNumber">
              <div>전화번호</div>
              <input type="text" className="inputInfo" value={storeCalls} onChange={storeCallsHandler} />
            </div>
            <div className="storeNumber">
              <div>카테고리</div>
              <input type="text" className="inputInfo" value={storeCategory} onChange={storeCategoryHandler} />
            </div>
            <div className="storeHashTag">
              <div>해시태그</div>
              <div className="inputTag">
                <input type="text" placeholder="   #을 제외한 내용만 입력해주세요(최대3개)" value={inputHashTag} className="inputHashTag" onChange={(e) => inputHashTagHandler(e)} />
                <button className="hashTagBtn" type="submit" onClick={storeHashTagHandler}>+</button>
              </div>
            </div>
            {/* 입력한 해시태그 목록 */}
            <div className="hashTagList">
              {storeHashTag.map((hashTag, index) => (
                <div key={index}>#{hashTag}</div>
              ))}
            </div>
          </div>
        </div>
        {/* 메뉴등록 */}
        <div className="menuRegister">
          <div className="title">메뉴<button type="submit" className="menuBtn" onClick={storeMenuListHandler}>+</button></div>
          <div className="menuList">
            <div className="menuPrice">
              <div>메뉴명</div>
              <input type="text" value={menuList} className="inputMenu input" onChange={(e) => menuListHandler(e)} />
            </div>
            <div className="menuPriceInfo">
              <div>가격</div>
              <input type="text" value={priceList} className="inputPrice input" onChange={(e) => priceListHandler(e)} />
            </div>
          </div>
          <div className="menuInfo">
            <div className="registerMenu">
              <div className="menu">
                {storeMenuList.map((menu, index) => (
                  <div key={index}>{menu.name}</div>
                ))}
              </div>
              <div className="price">
                {storeMenuList.map((price, index) => (
                  <>
                    <div className="delBtn" key={index}>{price.price}원
                      <button className="menuDelBtn" onClick={() => menuDelHandler(price.id)}>-</button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonList">
        <button type="button" className="register" onClick={() => register(image)}>등록</button>
        <Link href={"/admin/store"}><button type="button" className="cancel">취소</button></Link>
      </div>
    </div>
  );
};

export default StoreRegister;
