'use client'

import router from "next/router";
import { useRef, useState } from "react";

interface menuList {
  menu: string;
  price: number;
}

const useRegister = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [storeHours, setStoreHours] = useState<string>('');
  const [storeAddress, setStoreAddress] = useState<string>('');
  const [storeCategory, setStoreCategory] = useState<string>('');
  const [storeCalls, setStoreCalls] = useState<string>('');
  const [storeHashTag, setStoreHashTag] = useState<string>('');
  const [storeMenuList, setStoreMenuList] = useState<string>('');
  const [image, setImage] = useState<string>('/asset/image/defaultImage.png');
  const fileInput = useRef<HTMLInputElement>(null);

  const storeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  }

  const storeHoursHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreHours(e.target.value);
  }
  const storeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreCategory(e.target.value);
  }

  const storeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreAddress(e.target.value);
  }

  const storeCallsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreCalls(e.target.value);
  }

  const storeHashTagHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreHashTag(e.target.value);
  }
  const storeMenuListHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreMenuList(e.target.value);
  }

  const imageHandler = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setImage(e.target.result);
      }
    }
  }
  console.log(storeName);

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const storeInfo = {
      name: storeName,
      address: storeAddress,
      hours: storeHours,
      calls: storeCalls,
      category: storeCategory,
      hashtagList: storeHashTag,
      menuList: storeMenuList,
    };


    //api 호출 후 목록으로 이동
    //   const res = await apiName();
    //   router.push('/admin/store');
    // }

  }
  return {
    storeName, storeHours, storeAddress, storeCalls, storeHashTag, image, fileInput, storeMenuList, storeCategory,
    setStoreCategory, storeNameHandler, storeHoursHandler, storeAddressHandler, storeCallsHandler, storeHashTagHandler, imageHandler,
    setStoreMenuList, register, storeCategoryHandler
  }
}

export default useRegister;