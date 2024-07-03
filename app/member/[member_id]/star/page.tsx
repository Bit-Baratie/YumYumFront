'use client'
import StoreInfo from "@/app/store/(component)/StoreInfo";
import PageStyle from './page.module.scss';
import useMember from "@/app/(hooks)/member/useMember";

const StarPage = () => {
  const {likeStore} = useMember();

  return (
    <div className={PageStyle.layout}>
      {likeStore !== undefined?
      <StoreInfo store={likeStore}/>:
      <div>즐겨찾기한 맛집이 없습니다</div>
      }
    </div>
  );
}

export default StarPage;