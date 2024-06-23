import StoreInfo from "./StoreInfo";

const StoreList = () => {

    return (
        <div id="storeList">
            <div id="searchStoreNumber">
                {/* Span에 검색결과 계산해서 가져와야함 */}
                <div><span>28</span>건의 검색결과가 있습니다.</div>
            </div>
            <StoreInfo />
        </div>
    )
}
export default StoreList