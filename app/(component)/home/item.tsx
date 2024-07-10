import Image from "next/image";
import ItemStyle from './item.module.scss';
import { getStoreType } from "@/app/type";

const Item = ({item}: {item:getStoreType}) => {
  return (
    <div className={ItemStyle.container}>
      <Image src={'/'} width={180} height={180} alt="가게이미지"/>
      <div className={ItemStyle.name}>{item.name}</div>
      <div><span>⭐️{item.avgGrade}</span><span>❤️{item.totalFavoriteCount}</span></div>
    </div>
  );
}

export default Item;