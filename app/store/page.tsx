import { Suspense } from "react";
import SearchStoreList from "./(component)/SearchStoreList";
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
