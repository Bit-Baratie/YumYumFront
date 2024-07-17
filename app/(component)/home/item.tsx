import Image from "next/image";
import ItemStyle from './item.module.scss';
import { getStoreListType } from "@/app/type";
import Link from "next/link";
import useImage from "@/app/(hooks)/common/useImage";

const Item = ({item}: {item:getStoreListType}) => {
  const {errorImage} = useImage();
  return (
    <Link href={`/store/${item.storeId}`} className={ItemStyle.container}> 
      <img src={item.imageUrl} width={180} height={180} alt="가게이미지"/>
      <div className={ItemStyle.name}>{item.name}</div>
      <div><span>⭐️{item.avgGrade}</span><span>❤️{item.totalFavoriteCount}</span></div>
    </Link>
  );
}

export default Item;