'use client'

import { useEffect } from "react";
import '@/app/test/style.scss';
import useImage from "../(hooks)/common/useImage";
import Image from "next/image";
import { Solitreo } from "next/font/google";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { group } from "console";
import { initialize } from "next/dist/server/lib/render-server";
import useReview from "../(hooks)/review/useReview";
import ReviewApi from "../(api)/review/reviewApi";

interface ReviewData {
  nickname: string;
  reviewCount: number;
  gradeAvg: number;
  profileImg: string;
  content: string;
  grade: number;
  writeTime: Date;
}

const Test = () => {
  const {getReviewAll} = ReviewApi();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery<any>({
    queryKey: ['reviewList'],
    queryFn: ({pageParam}) => getReviewAll({pageNumber:pageParam}),
    initialPageParam: 0,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageable.pageNumber+1;
    }
  })

  console.log(data)

  return (
    <div>
      {status === 'error' && <p>{error.message}</p>}
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
    </div>
  );
}

export default Test;