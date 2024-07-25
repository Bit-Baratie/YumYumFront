import { Suspense } from "react";
import SearchStoreList from "../(component)/store/SearchStoreList";
const Store = () => {
  return (
    <>
      <Suspense>
        <SearchStoreList />
      </Suspense>
    </>
  );
}

export default Store;
