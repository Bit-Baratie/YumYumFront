import "@/app/store/[store_id]/storeDetailPage.scss"
import "@/app/store/[store_id]/storeDetailMap.scss"
import StoreDetail from "@/app/store/[store_id]/component/StoreDetail";
import StoreDetailMap from "./component/StoreDetailMap";
import { ReviewItem } from "@/app/(component)/reviewItem";
const Store = () => {
  return (
    <div className="StoreDetailComponent" style={{ display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", alignItems: "center", margin: "0px" }}>
      <StoreDetail />
      <StoreDetailMap />
      <ReviewItem />
    </div>
  );
}

export default Store;
