'use client'
import { search } from "@/app/(api)/common/searchApi";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface store {
  storeId: number;
  name: string;
  address: string;
  totalFavoriteCount: number;
  totalReviewCount: number;
  imageUrl: string;
  views: number;
  hashtags: hashtagListType[];
  categoryName: string,
  avgGrade: number;
  favoriteStatus: boolean;
}
interface hashtagListType {
  id: number,
  content: string
}

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const { data, error, isLoading } = useQuery({ queryKey: ['keySearch', searchParams], queryFn: () => search(searchParams) });
  const [keyword, setKeyword] = useState<string>('');

  const router = useRouter();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  const keywordSearch = () => {
    router.push(`/store?keyword=${keyword}`);
  }

  // const pressEnter = (e: KeyboardEvent) => {
  //   console.log(e.key)
  //   if (e.key == 'Enter') {
  //     router.push(`/store?keyword=${keyword}`);
  //   } else {
  //     return;
  //   }
  // }

  return {
    keyword,
    data,
    inputHandler,
    keywordSearch,
    // pressEnter
  };
}

export default useSearch;