import Image from "next/image";
import Slide from "../(component)/home/slide";
import PageStyle from './page.module.scss';
import bannerImg from '@/public/asset/image/banner.png';

const page = () => {
  return (
    <div className={PageStyle.container}>
      <Image src={bannerImg} alt="배너이미지" width={0} height={0} sizes="100%" className={PageStyle.img} priority={true} placeholder="blur"/>
      <Slide/>
    </div>
  );
}

export default page;