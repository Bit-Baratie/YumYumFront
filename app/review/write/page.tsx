'use client';

import React, { useState, ChangeEvent } from 'react';
import WriteStyle from './write.module.scss';
import Header from '@/app/header';
import Image from 'next/image';
import Star from './Star';
import { CameraFilled, LeftOutlined } from '@ant-design/icons';
// import Close from '../../../public/asset/image/close.png';
import close from '../../../public/asset/image/close.png';

const ReviewWrite: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

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

    return (
        <>
            <Header />
            <div className={WriteStyle.write}>
                <button className={WriteStyle.back}><LeftOutlined /></button>
                <div className={WriteStyle.storeName}>엄마 손 파이</div>
                <div className={WriteStyle.star}><Star /></div>
                <div className={WriteStyle.hr}><span className={WriteStyle.line}></span></div>
                <div>
                    <input type="textarea" placeholder="리뷰를 작성해주세요" className={WriteStyle.textform} />
                </div>
                <div>
                    <label htmlFor="fileInput">
                        <div className={WriteStyle.btnUpload}><CameraFilled />사진 첨부</div>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        multiple
                    />
                    <ul className={WriteStyle.imgList}>
                        {images.map((src, index) => (
                            <li key={index}>
                                {/* 삭제 버튼 만들기 */}
                                <button className={WriteStyle.closeBtn} onClick={() => removeImg(index)}>
                                    <Image src={close} alt="close" width={220} height={220}/>
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
                    <button className={WriteStyle.submit}>작성완료</button>
                </div>
            </div>
        </>
    );
}

export default ReviewWrite;
