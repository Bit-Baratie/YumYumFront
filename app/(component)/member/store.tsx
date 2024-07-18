import Image from "next/image";
import StoreStyle from './store.module.scss';
import Link from "next/link";
import { getStoreListType } from "@/app/type";
import useImage from "@/app/(hooks)/common/useImage";

const StoreContainer = ({likeStoreList} : {likeStoreList: getStoreListType[]}) => {
  return (
    <>
      {likeStoreList[0]?<DashboardStore item={likeStoreList[0]}/>:''}
      {likeStoreList[1]?<DashboardStore item={likeStoreList[1]}/>:''}
      {likeStoreList[2]?<DashboardStore item={likeStoreList[2]}/>:''}
      {likeStoreList[3]?<DashboardStore item={likeStoreList[3]}/>:''}
    </>
  );
}

const DashboardStore = ({item}: {item:getStoreListType}) => {
  const {errorImage} = useImage();
  
  return (
    <Link href={`/store/${item.storeId}`}>
      <div className={StoreStyle.container}>
        <img src={item.imageUrl} width={170} height={110} alt="가게이미지" onError={errorImage}/>
        <div className={StoreStyle.name}>{item.name}</div>
        <div><span>⭐️{item.avgGrade}</span><span>❤️{item.totalFavoriteCount}</span></div>
      </div>
    </Link>
  );
}

export default StoreContainer;