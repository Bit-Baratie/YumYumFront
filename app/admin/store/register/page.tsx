'use client'
import "@/app/admin/comment/comment.module.scss";
import "@/app/admin/store/register/storeRegister.scss";
import useRegister from "../(hooks)/useRegister";
import Link from "next/link";

const StoreRegister = () => {

  const { storeName, storeHours, storeAddress, storeCalls, storeHashTag, image, fileInput, storeMenuList, storeCategory,
    setStoreCategory, storeNameHandler, storeHoursHandler, storeAddressHandler, storeCallsHandler, storeHashTagHandler, imageHandler,
    setStoreMenuList, register, storeCategoryHandler } = useRegister();

  return (
    <div>
      <div className="container">
        <div className="storeDetail">
          {/* <div className="storeId">{storeList.storeId}</div> */}
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
              <span>가게상호</span>
              <input type="text" className="inputInfo" onChange={storeNameHandler} />
            </div>
            <div className="storeHour">
              <div>영업시간</div>
              <input type="text" className="inputInfo" onChange={storeHoursHandler} />
            </div>
            <div className="storeAddress">
              <div>주소</div>
              <input type="text" className="inputInfo" onChange={storeAddressHandler} />
            </div>
            <div className="storeNumber">
              <div>전화번호</div>
              <input type="text" className="inputInfo" onChange={storeCallsHandler} />
            </div>
            <div className="storeNumber">
              <div>카테고리</div>
              <input type="text" className="inputInfo" onChange={storeCategoryHandler} />
            </div>
            <div className="storeHashTag">
              <div>해시태그</div>
              <input type="text" placeholder="#을 제외한 내용만 입력해주세요" className="inputHashTag" onChange={storeHashTagHandler} />
            </div>
          </div>

        </div>
      </div>
      <div className="buttonList">
        <button type="button" className="register" onClick={register}>등록</button>
        <Link href={"/admin/store"}><button type="button" className="cancel">취소</button></Link>
      </div>
    </div>
  );
};

export default StoreRegister;
