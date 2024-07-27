import Image from "next/image";
import StoreStyle from "./store.module.scss";
import Link from "next/link";
import { getStoreListType } from "@/app/type";
import useImage from "@/app/(hooks)/common/useImage";
import CustomImage from "../common/customImage";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import Bookmark from "@/public/asset/image/mark.svg";
import Review from '@/public/asset/image/review.svg'

const StoreContainer = ({
  likeStoreList,
}: {
  likeStoreList: getStoreListType[];
}) => {
  return (
    <>
      {likeStoreList[0] ? <DashboardStore item={likeStoreList[0]} /> : ""}
      {likeStoreList[1] ? <DashboardStore item={likeStoreList[1]} /> : ""}
      {likeStoreList[2] ? <DashboardStore item={likeStoreList[2]} /> : ""}
      {likeStoreList[3] ? <DashboardStore item={likeStoreList[3]} /> : ""}
    </>
  );
};

const DashboardStore = ({ item }: { item: getStoreListType }) => {
  return (
    <Link href={`/store/${item.storeId}`}>
      <div className={StoreStyle.container}>
        <CustomImage
          src={item.imageUrl}
          width={170}
          height={110}
          alt="가게이미지"
          style={""}
        />
        <div className={StoreStyle.name}>{item.name}</div>
        <div>
          <span>
            <StarFilled className={StoreStyle.mark} width={16} height={16} />
            {item.avgGrade}&ensp;
          </span>
          <span>
            <Review className={StoreStyle.mark} width={16} height={16} />
            {item.totalReviewCount}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StoreContainer;
