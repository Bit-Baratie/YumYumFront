import { ChangeEvent, useState } from "react";

const useImage = () => {
  const [image, setImage] = useState<File[]>([]);
  const [preview, setPreview] = useState<any>([]);

  const imageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = [...image];
      const newPreviews = [...preview];

      for (let i = 0; i < e.target.files!.length; i++) {
        const file = e.target.files![i];
        // 이벤트객체의 파일을 newImages에 담기
        newImages.push(file);
        // 파일리더 객체 생성
        const reader = new FileReader();
        // 파일 읽어온 후 실행되는 콜백함수
        reader.onload = (e) => {
          // 읽어온 값을 갱신하기
          newPreviews.push(e.target!.result as string);
          setPreview(newPreviews);
        };
        // 파일 객체를 읽어 base64 형태의 문자열로 변환
        reader.readAsDataURL(file);
      }
      setImage(newImages);
    }
  }

  const removeImg = (index: number) => {
    setImage((image) => image.filter((_, i) => i !== index));
    setPreview((prevImage: any[]) => prevImage.filter((_, i) => i !== index));
  };

  return {
    image,
    preview,
    imageHandler,
    removeImg
  }
}

export default useImage;