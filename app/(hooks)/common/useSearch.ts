'use client'
import { search } from "@/app/(api)/common/searchApi";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const { data } = useQuery({ queryKey: ['keySearch', searchParams], queryFn: () => search(searchParams) });
  const [keyword, setKeyword] = useState<string>('');

  const router = useRouter();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const keywordSearch = () => {
    router.push(`/store?keyword=${keyword}`);
  }

  return {
    keyword,
    data,
    inputHandler,
    keywordSearch
  };
}

export default useSearch;