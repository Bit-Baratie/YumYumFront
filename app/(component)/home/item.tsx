import Image from "next/image";
import ItemStyle from "./item.module.scss";
import { getStoreListType } from "@/app/type";
import Link from "next/link";
import useImage from "@/app/(hooks)/common/useImage";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import CustomImage from "../common/customImage";
import Bookmark from "@/public/asset/image/mark.svg";

const Item = ({ item }: { item: getStoreListType }) => {
  return (
    <Link href={`/store/${item.storeId}`} className={ItemStyle.container}>
      <CustomImage
        style={""}
        src={item.imageUrl}
        width={180}
        height={180}
        alt="가게이미지"
      />
      <div className={ItemStyle.name}>{item.name}</div>
      <div className={ItemStyle.iconWrapper}>
        <div className={ItemStyle.iconText}>
          <StarFilled className={ItemStyle.icon} />
          <span>
            {item.avgGrade}({item.reviewCount})
          </span>
        </div>
        &ensp;
        <div className={ItemStyle.iconText}>
          <Bookmark className={ItemStyle.icon} width={16} height={16} />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
