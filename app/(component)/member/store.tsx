import Image from "next/image";
import StoreStyle from './store.module.scss';
import Link from "next/link";

interface StoreType {
  id: number,
  name: string,
  address: string,
  totalFavoriteCount: number,
  reviewNumber: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashTagList: string[],
  avgGrade: number,
  isFavorite: boolean,
}

const StoreContainer = ({likeStoreList} : {likeStoreList:StoreType[]}) => {
  return (
    <>
    {likeStoreList && likeStoreList.length > 0?
    <>
      {
        likeStoreList?.map((item:StoreType) => {
          return (<Store key={item.id} item={item}/>)
        })
      }</>:<div>즐겨찾기한 맛집이 없습니다</div>
    }
    </>
  );
}

const Store = ({item}: {item:StoreType}) => {
  return (
    <Link href={`/store/${item.id}`}>
      <div className={StoreStyle.container}>
        <Image src={'/'} width={170} height={110} alt="가게이미지"/>
        <div className={StoreStyle.name}>{item.name}</div>
        <div><span>⭐️{item.avgGrade}</span><span>❤️{item.totalFavoriteCount}</span></div>
      </div>
    </Link>
  );
}

export default StoreContainer;