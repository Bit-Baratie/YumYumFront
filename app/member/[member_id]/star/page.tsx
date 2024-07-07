'use client'
import StoreInfo from "@/app/store/(component)/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";

interface StoreType {
  storeId: number,
  name: string,
  address: string,
  favoriteCount: number,
  reviewCount: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashtagList: string[],
  avgGrade: number,
  isFavorite: boolean
}

const StarPage = () => {
  const {likeStoreList} = useMember();

  return (
    <>
    {likeStoreList?
      <div className={PageStyle.layout}>
        {likeStoreList.map((item: StoreType) => {
          return(<StoreInfo store={item}/>)
        })}
      </div>:
      <div>즐겨찾기한 맛집이 없습니다</div> 
    }
    </>
  );
}

export default StarPage;