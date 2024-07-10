import Image from "next/image";
import StoreStyle from './store.module.scss';
import Link from "next/link";
import { getStoreType } from "@/app/type";

const StoreContainer = ({likeStoreList} : {likeStoreList: getStoreType[]}) => {
  return (
    <div className={StoreStyle.dashboard}>
      {
        <>
          {likeStoreList[0]?<DashboardStore item={likeStoreList[0]}/>:''}
          {likeStoreList[1]?<DashboardStore item={likeStoreList[1]}/>:''}
          {likeStoreList[2]?<DashboardStore item={likeStoreList[2]}/>:''}
          {likeStoreList[3]?<DashboardStore item={likeStoreList[3]}/>:''}
        </>
      }
      </div>
  );
}

const DashboardStore = ({item}: {item:getStoreType}) => {
  return (
    <Link href={`/store/${item.storeId}`}>
      <div className={StoreStyle.container}>
        <Image src={'/'} width={170} height={110} alt="가게이미지"/>
        <div className={StoreStyle.name}>{item.name}</div>
        <div><span>⭐️{item.avgGrade}</span><span>❤️{item.totalFavoriteCount}</span></div>
      </div>
    </Link>
  );
}

export default StoreContainer;