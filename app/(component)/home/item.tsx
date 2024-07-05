import Image from "next/image";
import ItemStyle from './item.module.scss'

interface StoreType {
  id: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageUrl: string,
  avgGrade: number
}

const Item = ({item}: {item:StoreType}) => {
  return (
    <div className={ItemStyle.container}>
      <Image src={'/'} width={180} height={180} alt="가게이미지"/>
      <div className={ItemStyle.name}>{item.name}</div>
      <div><span>⭐️{item.avgGrade}</span><span>❤️{item.favoriteCount}</span></div>
    </div>
  );
}

export default Item;