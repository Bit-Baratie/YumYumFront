import Image from "next/image";
import ItemStyle from "./item.module.scss";
import { getStoreListType } from "@/app/type";
import Link from "next/link";
import useImage from "@/app/(hooks)/common/useImage";
import { StarFilled, HeartFilled } from "@ant-design/icons";

const Item = ({ item }: { item: getStoreListType }) => {
  const { errorImage } = useImage();
  return (
    <Link href={`/store/${item.storeId}`} className={ItemStyle.container}>
      <img src={item.imageUrl} width={180} height={180} alt="가게이미지" onError={errorImage}/>
      <div className={ItemStyle.name}>{item.name}</div>
      <div className={ItemStyle.iconWrapper}>
        <div className={ItemStyle.iconText}>
          <StarFilled className={ItemStyle.icon} />
          <span>{item.avgGrade}</span>
        </div>

        <div className={ItemStyle.iconText}>
          <HeartFilled className={ItemStyle.icon} />
          <span>{item.totalFavoriteCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
