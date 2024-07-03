import Image from "next/image";
import reviewStyle from "@/app/(component)/reviewItem.module.scss";
import Profile from "@/app/review/profile";
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import LikeButton from "@/app/(component)/likeButton";

const ReviewItem = () => {
  // const [like, setlike] = useState(false); // 추가

  return (
    <div className={reviewStyle.reviewItem}>
      <div className={reviewStyle.storeInfo}>
        <span className={reviewStyle.storeName}>엽기떡볶이</span>
        <span className={reviewStyle.addr}>서울 강남구 강남대로 20</span>
      </div>

      <div className={reviewStyle.bottom}>
        <div className={reviewStyle.profile}>
          <Profile /> {/* <div>프로필</div> */}
          <div className={reviewStyle.meta}>
            {/* <span className={reviewStyle.smallBlack}>푸바오야가지마</span><br></br> */}
            {/* <span className={reviewStyle.smallGray}>별 리뷰개수 평균별점</span>   */}
          </div>
          <LikeButton />
        </div>
        <div className={reviewStyle.reviewContent}>
          Armageddon Shoot Imma get 'em Shoot Watch Uh Imma bite back Uh 짙은
          어둠이 막아설 땐 Uh 한 걸음 앞으로 날아든 It's bad 사라진 Feedback
          시작된 Code black Uh 깊어가 혼란스러운 밤 악몽은 또 짙게 번져가 뭔갈
          숨기려고 해 I got it, I got it 혼돈을 타고 덮쳐 Killing like Bang
          chitty bang Bang chitty bang bang 'Cause I wanna see I wanna see truly
          Bang chitty bang Bang chitty bang bang 내게 다가와 다가와 Imma get it
        </div>
        <div className={reviewStyle.reviewImg}>
          <Image
            className={reviewStyle.reivewImage}
            // src={'/./'}
            src={"/asset/image/ddddddd.JPG"}
            width={350}
            height={350}
            alt="리뷰이미지"
          />
          <Image
            className={reviewStyle.reivewImage}
            src={"/asset/image/ddddddd.JPG"}
            width={350}
            height={350}
            alt="리뷰이미지"
          />
          <Image
            className={reviewStyle.reivewImage}
            src={"/asset/image/ddddddd.JPG"}
            width={350}
            height={350}
            alt="리뷰이미지"
          />
          <div className={reviewStyle.contL}>
            <Image
              className={reviewStyle.reivewImageLast}
              src={"/asset/image/ddddddd.JPG"}
              width={350}
              height={350}
              alt="리뷰이미지"
            />
            <p>+3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

// 마이페이지_나의정보 리뷰미리보기

// 하트버튼
// useEffect() => {
//     const fetchData = async()=> {
//         const res = await axios.get('http://localhost3000/member??')
//         if( res.data.type === 'liked') setDefaultHighWaterMark(true)
//     }
// fetchData();
// }, []);

// const toggleLike = async(e) => {
//     const res = await axios.post('http://localhost3000/member??)
//     setDefaultHighWaterMark(!like)
// }

// return (
//     <>
//     <HeartButton like={like} onClick={toggleLike}/>
//     <Detail content={content}/>
//     </>
// );
