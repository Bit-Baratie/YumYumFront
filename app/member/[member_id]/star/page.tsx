'use client'
import StoreInfo from "@/app/store/(component)/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";

interface store {
  storeId: number;
  name: string;
  address: string;
  totalFavoriteCount: number;
  totalReviewCount: number;
  imageUrl: string;
  views: number;
  hashtags: string[];
  categoryName: string,
  avgGrade: number;
  favoriteStatus: boolean;
  latitude: number,
  longitude: number,
}

const StarPage = () => {
  const {likeStoreList} = useMember();

  return (
    <div className={PageStyle.container}>
      {likeStoreList?.pages.map((page) => (
        <>
          {page.content.map((item: store) => (
            <StoreInfo store={item}/>
          ))}
        </>
      ))}
    </div>
  );
}

export default StarPage;