import Image from "next/image";
import Slide from "../(component)/home/slide";
import PageStyle from './page.module.scss';

const page = () => {
  return (
    <>
      <Image src={'/asset/image/banner.png'} alt="배너이미지" width={0} height={0} sizes='100vw' className={PageStyle.img} priority={true}/>
      <Slide/>
    </>
  );
}

export default page;