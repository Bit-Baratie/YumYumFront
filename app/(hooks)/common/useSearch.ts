'use client'
import { search } from "@/app/(api)/common/searchApi";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useStoreApi from "@/app/store/(api)/StoreApi";
import { location } from "@/app/type";

const useSearch = () => {
  const searchParams = useSearchParams().get('keyword');
  const { data, isLoading, isError } = useQuery({ queryKey: ['keySearch', searchParams], queryFn: () => search(searchParams) });
  const [keyword, setKeyword] = useState<string>('');

  const router = useRouter();
  const { getStoreInfo } = useStoreApi();

  const fetchData = async () => {
    let latitude = 37.4995961;
    let longitude = 127.0289929;
    const LatLng: location = { latitude, longitude };
    const result = data ? data : await getStoreInfo(LatLng);
    return result
  }

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
    keywordSearch,
    fetchData
  };
}

export default useSearch;