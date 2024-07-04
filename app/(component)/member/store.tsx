import Image from "next/image";
import StoreStyle from './store.module.scss';
import Link from "next/link";

interface StoreType {
  id: number,
  name: string,
  address: string,
  favoriteNumber: number,
  reviewNumber: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashTagList: string[],
  grade: number,
  isFavorite: boolean,
}

const StoreContainer = ({likeStoreList} : {likeStoreList:StoreType[]}) => {
  return (
    <>
    {
      likeStoreList.map((item) => {
        return (<Store key={item.id} item={item}/>)
      })
    }
    </>
  );
}

const Store = ({item}: {item:StoreType}) => {
  return (
    <Link href={`/store/${item.id}`}>
      <div className={StoreStyle.container}>
        <Image src={item.imageUrl} width={170} height={110} alt="가게이미지"/>
        <div className={StoreStyle.name}>{item.name}</div>
        <div><span>⭐️{item.grade}</span><span>❤️{item.favoriteNumber}</span></div>
      </div>
    </Link>
  );
}

export default StoreContainer;