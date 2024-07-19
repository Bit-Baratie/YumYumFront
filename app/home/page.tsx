import Image from "next/image";
import Slide from "../(component)/home/slide";
import PageStyle from './page.module.scss';
import bannerImg from '@/public/asset/image/banner.png';

const page = () => {
  return (
    <>
      <Image src={bannerImg} alt="배너이미지" width={0} height={0} sizes='100vw' className={PageStyle.img} priority={true} placeholder="blur"/>
      <Slide/>
    </>
  );
}

export default page;