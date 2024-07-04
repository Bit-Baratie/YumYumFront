import TestMap from "@/app/store/(component)/NaverMap";
import myLocation from "./MyLocation"
import StoreList from "./StoreList";

const SearchStoreList = () => {
  return (
    <div className="container">
      <div className="content">
        {/* 지도 Api  */}
        <TestMap />
        {/* 가게 리스트 */}
        <StoreList />
      </div>
    </div>
  )
}
export default SearchStoreList;