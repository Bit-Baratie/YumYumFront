"use client";
import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import ButtonStyle from "./reviewItem.module.scss";
import reviewApi from "../(api)/review/reviewApi";

const LikeButton = ({
  reviewId,
  likeStatus,
}: {
  reviewId: number;
  likeStatus: Boolean;
}) => {
  const [isChecked, setIsChecked] = useState<Boolean>(likeStatus);
  const [notice, setNotice] = useState("");
  const { like } = reviewApi();

  useEffect(() => {
    setIsChecked(likeStatus);
  }, [likeStatus]);

  const onClick = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const postChecked = () => {
    const liked = { status: !isChecked, reviewId: reviewId };
    like({ liked });
    // console.log(liked);
  };

  return (
    <>
      {/* <div className='icons-list' onClick={onClick}> */}
      <div
        className={ButtonStyle.iconsList}
        onClick={() => {
          onClick();
          postChecked();
        }}
      >
        {isChecked ? (
          <HeartFilled className={ButtonStyle.redBtn} />
        ) : (
          <HeartOutlined className={ButtonStyle.emptyBtn} />
        )}
      </div>
      <p>{notice}</p>
    </>
  );
};

export default LikeButton;
