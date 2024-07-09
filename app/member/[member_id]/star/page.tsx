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
}

const StarPage = () => {
  const {likeStoreList} = useMember();

  return (
    <>
    {likeStoreList && likeStoreList.content.length > 0?
      <div className={PageStyle.container}>
        {likeStoreList?.content.map((item: store) => {
          return(<StoreInfo store={item}/>)
        })}
      </div>:
      <div>즐겨찾기한 맛집이 없습니다</div> 
    }
    </>
  );
}

export default StarPage;