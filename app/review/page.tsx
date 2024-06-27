import Headers from "../header";
import Profile from "./profile";
import "./review.scss";
import Comment from "./comment";
import React,{ useState } from "react";
import LikeButton from "./LikeButton";
import Dropdown from "./Dropdown";


// ReactDOM.render (<LikeButton />, document.getElementById('root'))



const Review = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <> < Headers /> 
        <div className="review">
            <div className="top">
                <button className="back"></button>
                리뷰

                {
                    openMenu && <Dropdown/>
                }
                <Dropdown/>

                <button className="edit"></button>



            </div>
            <div className="ddd">
            <Profile/><LikeButton/>
            </div>

            <div className="review-content">
                I'm like some kind of supernova Watch out Look at me go, 재미 좀 볼 빛의 core, so hot,
                hot 문이 열려 서로의 존재를 느껴 마치 Discord, 날 닮은 너 (incoming!), 너 누구야? (Drop) 사건은 다가와,
                ah-oh, ayy 거세게 커져가, ah-oh, ayy That tick, that tick, tick bomb That tick, that
                tick, tick bomb 감히 건드리지 못할 걸 (누구도 말이야) 지금 내 안에선 (su-su-su-supernova) Nova,
                can'tstop hyperstellar 원초 그걸 찾아 Bring the light of a dying star 불러낸 내 우주를
                봐봐,supernova Ah, body bang (bang, bang, bang) Make it feel too right 휩쓸린 energy,
                it's so special 잔인한 queen 이며 scene 이자 종결 이토록 거대한 내 안의 explosion 내 모든 세포 별로부터
                만들어져 (under my control) 질문은 계속돼, ah-oh, ayy 우린 어디서 왔나, oh, ayy 느껴 내 안에선, huh
                (su-su-su-supernova) Nova, can't stop hyperstellar 원초 그걸 찾아 Bring the light of
                adying star 불러낸 내 우주를 봐봐, supernova 보이지 않는 힘으로 네게 손 내밀어 볼까? 가능한 모든 가능성, 무한 속의 너를
                만나 It's about to bang, bang, don't forget my name Su-su-su-supernova 사건은
                다가와,ah-oh, ayy 거세게 커져가, ah-oh, ayy 질문은 계속돼, ah-oh, ayy 우린 어디서 왔나, oh, ayy

            </div>
            <div className="review-image">
                <ul>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                    <li><img
                        src="../../public/asset/image/IMG_1282.jpg"
                        alt="리뷰이미지"
                        className="review-image-img"/></li>
                </ul>
            </div>
        </div>

        <Comment/>

    </>
    );
}

export default Review;