import TestMap from "@/app/store/(component)/NaverMap";
const StoreDetailMap = () => {
    return (
        <>
            <div className="DetailMap">
                <div className="map">
                    <TestMap />
                </div>
                <div className="menu">
                    <div className="menuInfo">
                        <p>메뉴정보</p>
                        <span>더보기+</span>
                    </div>
                    <div className="menuList">
                        <div className="menuName">
                            <ul>
                                <li>엄마 손 파이</li>
                                <li>아빠 손 파이</li>
                                <li>카넬로 손 파이</li>
                            </ul>
                        </div>
                        <div className="menuLine">
                            <ul>
                                <li>--------------------</li>
                                <li>--------------------</li>
                                <li>---------------------</li>
                            </ul>
                        </div>
                        <div className="menuPrice">
                            <ul>
                                <li>8000원</li>
                                <li>8000원</li>
                                <li>8000원</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreDetailMap;