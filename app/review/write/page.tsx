"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import WriteStyle from "./write.module.scss";
import Header from "@/app/header";
import Image from "next/image";
import Star from "./Star";
import { CameraFilled, LeftOutlined } from "@ant-design/icons";
import close from "../../../public/asset/image/close.png";
import useReview from "@/app/(hooks)/review/useReview";
import { useRouter, useSearchParams } from "next/navigation";
import useImage from "@/app/(hooks)/common/useImage";

const ReviewWrite = () => {
  const { contentHandler, createReviewHandler, handleStarClick, rating, updateReviewHandler, setContent } = useReview();
  const searchParams = useSearchParams();
  let defaultData = {
    storeName: searchParams.get('storeName'),
    storeId: searchParams.get('storeId'),
    content: '',
    reviewId: 0,
    grade: 0
  };
  const [storeInfo, setStoreInfo] = useState(defaultData);
  const {image, imageHandler, preview, removeImg} = useImage();


  useEffect(() => {
    const query = searchParams.get('data');
    if (query) {
      // console.log(query)
      const patchData = JSON.parse(query);
      setStoreInfo(patchData);
      setContent(patchData.content)
      handleStarClick(patchData.grade-1);
    }
  }, []);

  return (
    <>
      <Header />
      <div className={WriteStyle.write}>
        <button className={WriteStyle.back}>
          <LeftOutlined />
        </button>
        <div className={WriteStyle.storeName}>
          {storeInfo.storeName}
        </div>
        <div className={WriteStyle.star}>
          <Star rating={rating} handleStarClick={!searchParams.get('data')?handleStarClick:()=>{}} />
        </div>
        <div className={WriteStyle.hr}>
          <span className={WriteStyle.line}></span>
        </div>
        <div>
          <textarea
            placeholder="리뷰를 작성해주세요"
            className={WriteStyle.textform}
            onChange={(e) => contentHandler(e)}
            defaultValue={storeInfo.content}
          ></textarea>
        </div>
        <div>
          <label htmlFor="fileInput">
            <div className={WriteStyle.btnUpload}>
              <CameraFilled style={{ marginRight: "10px" }} />
              사진 첨부
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={imageHandler}
            multiple
            accept="image/*"
          />
          <ul className={WriteStyle.imgList}>
            {preview.map((src:any, index:number) => (
              <li key={index}>
                {/* 삭제 버튼 만들기 */}
                <button
                  className={WriteStyle.closeBtn}
                  onClick={() => removeImg(index)}
                >
                  <Image src={close} alt="close" width={220} height={220} />
                </button>
                <Image
                  className={WriteStyle.reviewImg}
                  src={src}
                  width={150}
                  height={150}
                  alt="리뷰이미지"
                />
              </li>
            ))}
          </ul>
          {!searchParams.get('data')?
          <button
            className={WriteStyle.submit}
            onClick={() => createReviewHandler(Number(searchParams.get("storeId")), image)}
          >
            작성완료
          </button>
          :
          <button
            className={WriteStyle.submit}
            onClick={() => updateReviewHandler(storeInfo.reviewId, image)}
          >
            수정완료
          </button>
          }
        </div>
      </div>
    </>
  );
};

export default ReviewWrite;
