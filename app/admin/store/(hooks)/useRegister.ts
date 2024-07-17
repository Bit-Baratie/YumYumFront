'use client'

import AdminApi from "@/app/(api)/admin/adminApi";
import router from "next/router";
import { useRef, useState } from "react";
import { menuType, postStoreType } from "@/app/type";
import Swal from "sweetalert2";
import useImage from "@/app/(hooks)/common/useImage";


const useRegister = () => {
  const { registerStore } = AdminApi();
  const [inputHashTag, setInputHashTag] = useState<string>("")
  const [storeName, setStoreName] = useState<string>('');
  const [storeHours, setStoreHours] = useState<string>('');
  const [storeAddress, setStoreAddress] = useState<string>('');
  const [storeCategory, setStoreCategory] = useState<Array<string>>([]);
  const [storeCalls, setStoreCalls] = useState<string>('');
  const [storeHashTag, setStoreHashTag] = useState<Array<string>>([]);
  const [storeMenuList, setStoreMenuList] = useState<Array<menuType>>([]);
  const [menuList, setMenuList] = useState<string>("");
  const [priceList, setPriceList] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);
  const nextId = useRef(0);

  const storeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  }

  const storeHoursHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreHours(e.target.value);
  }
  const storeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreCategory([e.target.value]);
  }

  const storeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreAddress(e.target.value);
  }

  const storeCallsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreCalls(e.target.value);
  }

  const inputHashTagHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHashTag(e.target.value);
  }

  const storeHashTagHandler = () => {
    if (storeHashTag.length > 2) {
      alert("3개까지만 입력이 가능합니다.")
    } else {
      setStoreHashTag([...storeHashTag, inputHashTag]);
      console.log("핸들러 실행 완료")
      setInputHashTag('');
      console.log(storeHashTag);
    }
  }
  const storeMenuListHandler = () => {
    const menuType = {
      id: nextId.current += 1,
      name: menuList,
      price: Number(priceList),
    }
    setPriceList("")
    setMenuList("")
    setStoreMenuList([menuType, ...storeMenuList]);
  }
  const menuListHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuList(e.target.value);
    console.log(menuList);
  }
  const priceListHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceList(e.target.value);
    console.log(priceList);
  }
  const menuDelHandler = (id: number) => {
    const delMenu = storeMenuList.filter(item => item.id !== id)
    setStoreMenuList(delMenu);
  }

  const register = async (image: File[]) => {
    const formData = new FormData();
    image.forEach((img) => formData.append('files', img));
    const createStoreDto = {
      name: storeName,
      address: storeAddress,
      hours: storeHours,
      calls: storeCalls,
      categoryList: storeCategory,
      hashtagList: storeHashTag,
      menuList: storeMenuList,
    };
    formData.append('createStoreDto', new Blob([JSON.stringify(createStoreDto)], { type: 'application/json' }));



    //api 호출 후 목록으로 이동
    const res = await registerStore(formData);
    try {
      if (res?.status === 201) {
        Swal.fire({
          title: '가게 등록 성공!',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#FFC933',
          confirmButtonText: '확인',
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/admin/store');
          }
        });
      } else {
        Swal.fire({
          title: '가게 등록 실패',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonColor: '#FFC933',
          confirmButtonText: '확인',
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      }
    } catch (err) {
      Swal.fire({
        title: '가게 등록 실패',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonColor: '#FFC933',
        confirmButtonText: '확인',
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
      console.log(err);
    }
  }

  return {
    storeName, storeHours, menuList, priceList, storeAddress, storeCalls, storeHashTag,
    fileInput, storeCategory, inputHashTag, storeMenuList,
    inputHashTagHandler, storeNameHandler, storeHoursHandler, storeAddressHandler,
    storeCallsHandler, storeHashTagHandler, register, menuDelHandler,
    storeCategoryHandler, menuListHandler, priceListHandler, storeMenuListHandler
  }
}

export default useRegister;