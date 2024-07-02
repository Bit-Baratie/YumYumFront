'use client';
import { searchStoreInfo,SearchResponse } from "@/app/store/(api)/StoreApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ChangeEvent, useState, useEffect, KeyboardEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface searchData {
  id: number,
  name: string,
  address: string,
  favoriteNumber: number,
  reviewNumber: number,
  imageUrl: string,
  categoryList: string[],
  views: number,
  hashTagList: string[],
  isFavorite: boolean,
  grade: number,
}

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const [keyword, setKeyword] = useState<string>(searchParams || '');

  

  const router = useRouter();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const keywordSearch = () => {
    router.push(`/store?keyword=${keyword}&&page=1`);
  }

  const pressEnter = (e: KeyboardEvent) => {
    console.log(e.key)
    if (e.key == 'Enter') {
      router.push(`/store?keyword=${keyword}&&page=1`);
    } else {
      return;
    }
  }

  return {
    keyword,
    inputHandler,
    keywordSearch,
    pressEnter
  };
}

export default useSearch;