'use client'
import { search } from "@/app/(api)/common/searchApi";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useStoreApi from "@/app/(api)/store/StoreApi";
import { location } from "@/app/type";

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const [keyword, setKeyword] = useState<string>('');
  const { data } = useQuery({ queryKey: ['keySearch', searchParams], queryFn: () => search(searchParams), enabled: Boolean(searchParams) });
  const router = useRouter();


  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const keywordSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/store?keyword=${keyword}`);
    }
  }

  return {
    keyword,
    data,
    inputHandler,
    keywordSearch,
  };
}

export default useSearch;