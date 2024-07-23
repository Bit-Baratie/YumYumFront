"use client";
import "@/app/store/[store_id]/storeDetailMap.scss";
import StoreDetail from "@/app/store/[store_id]/component/StoreDetail";
import ReviewItem from "@/app/(component)/review/reviewItem";
import { getReviewType } from "@/app/type";
import Link from "next/link";
import StoreApi from "../(api)/StoreApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useObserver } from "@/app/(hooks)/common/useObserver";
import Loading from "@/app/admin/(component)/Loading";
const Store = () => {
  const params = useParams();
  const bottomRef = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect,
  });
  const { data, isFetching, fetchNextPage, isFetchingNextPage, error, status
  } = useInfiniteQuery<any>({
    queryKey: ["storeReviewList", params.store_id],
    queryFn: ({ pageParam }) => getStoreReview(Number(params.store_id), { pageNumber: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (data) => {
      return data?.last ? undefined : data?.pageNumber + 1;
    },
  });

  console.log(data);

  const { getStoreReview } = StoreApi();
  return (
    <>
      {isFetching && <Loading />}
      {status === "success" && (
        <div
          className="StoreDetailComponent"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            margin: "0px",
          }}
        >
          <StoreDetail />
          {ReviewItem.length !== 0 ?
            <>
              {data?.pages.map((page) => (
                <div key={page.pageNumber}>
                  {page.content.map((reviewItem: getReviewType) => (
                    <Link
                      key={reviewItem.reviewId}
                      href={`/review/${reviewItem.reviewId}`}
                    >
                      <ReviewItem reviewItem={reviewItem} />
                    </Link>
                  ))}
                </div>
              ))}
            </>
            : <div>작성된 리뷰가 없습니다</div>}
          {isFetchingNextPage && <p>NextLoading...</p>}
        </div>
      )}
      <div ref={bottomRef}></div>
    </>
  );
};

export default Store;
