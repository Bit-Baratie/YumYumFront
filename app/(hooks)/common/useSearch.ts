'use client'
import { search } from "@/app/(api)/common/searchApi";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface searchData {
  storeImage: string;
  name: string;
  grade: number;
  gradeCount: number;
  faveriteCount: number;
  isFavorite: boolean;
}

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const {data, error, isLoading} = useQuery<Array<searchData>>({queryKey: ['keySearch', searchParams], queryFn:(() => search(searchParams))});
  const [keyword, setKeyword] = useState<string>('');
  
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
    data,
    inputHandler,
    keywordSearch,
    pressEnter
  };
}

export default useSearch;