import Image from "next/image";

interface ImageProps {
  alt: string
  src: string
  width: number
  height: number
  style: any
}

const CustomImage = ({ alt, src, height, width, style }: ImageProps) => {
  return (
    <>
      {src ? (
        <Image
          className={style}
          alt={alt}
          src={src}
          width={width}
          height={height}
        />
      ) : (
        <Image
          className={style}
          alt={alt}
          src='/asset/image/defaultImage.png'
          width={width}
          height={height}
        />
      )}
    </>
  );
}

export default CustomImage;