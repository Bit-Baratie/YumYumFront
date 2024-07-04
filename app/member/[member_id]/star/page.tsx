'use client'
import StoreInfo from "@/app/store/(component)/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";

const StarPage = () => {
  const {likeStoreList} = useMember();

  return (
    <>
    {likeStoreList?
      <div className={PageStyle.layout}>
        {likeStoreList.map((item) => {
          return(<StoreInfo store={item}/>)
        })}
      </div>:
      <div>즐겨찾기한 맛집이 없습니다</div> 
    }
    </>
  );
}

export default StarPage;