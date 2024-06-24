import "./profile.scss";
import Image from "next/image";

const Profile = () => {
    return (
        <div className="profile">
        {/* <img src="../../public/asset/image/IMG_1282.jpg" alt="이미지" className="profile-img"/> */}
        <Image src="/asset/image/IMG_1282.jpg" width={80} height={80} alt="이미지" className="profile-img"/>
        <div className="profile-info">
            <p className="profile-name">프로필 이름</p>
            <p className="profile-date">2020.20.20</p>
            <p className="profile-star">별점 리뷰 평균 별점</p>
        </div>
        </div>
    );
}


export default Profile;
