"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import WriteStyle from "./write.module.scss";
import Header from "@/app/header";
import Image from "next/image";
import Star from "./Star";
import { CameraFilled, LeftOutlined } from "@ant-design/icons";
// import Close from '../../../public/asset/image/close.png';
import close from "../../../public/asset/image/close.png";
import useReview from "@/app/(hooks)/review/useReview";
import { useRouter, useSearchParams } from "next/navigation";

interface GetReviewOne {
  id: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  totalReviewCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];
}

const ReviewWrite = () => {
  const { contentHandler, createReview, handleStarClick, rating, modifyReview } = useReview();
  const [images, setImages] = useState<string[]>([]);
  const searchParams = useSearchParams();
  let defaultData = {
    storeName: searchParams.get('storeName'),
    storeId: searchParams.get('storeId'),
    content: '',
    reviewId: 0,
    grade: 0
  };
  const [storeInfo, setStoreInfo] = useState(defaultData);


  useEffect(() => {
    const query = searchParams.get('data');
    if (query) {
      const patchData = JSON.parse(query);
      setStoreInfo(patchData);
      handleStarClick(patchData.grade-1);
    }
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImg = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // const handleSubmit = async () => {
  //   const storeId = Number(searchParams.get("storeId"));
  //   const response = await createStore(storeId);
  //   if (response.status === 201) {
  //     router.push("/review");
  //   }
  // };

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
            onChange={handleFileChange}
            multiple
          />
          <ul className={WriteStyle.imgList}>
            {images.map((src, index) => (
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
            onClick={() => createReview(Number(searchParams.get("storeId")))}
          >
            작성완료
          </button>
          :
          <button
            className={WriteStyle.submit}
            onClick={() => modifyReview(storeInfo.reviewId)}
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
