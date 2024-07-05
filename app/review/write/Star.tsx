import React, { useState } from "react";
import StarStyle from "./starStyle.module.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import useReview from "@/app/(hooks)/review/useReview";

const Star = ({ rating, handleStarClick }: any) => {
  // const { handleStarClick, rating } = useReview();
  // const [rating, setRating] = useState<number>(0);

  // const handleStarClick = (starIndex: number) => {
  //     setRating(starIndex + 1);
  // };

  return (
    <div className={StarStyle.starContainer}>
      {[...Array(5)].map((_, index) => {
        const isFilled = index < rating;
        return (
          <span
            key={index}
            className={StarStyle.star}
            onClick={() => handleStarClick(index)}
          >
            {isFilled ? (
              <StarFilled className={StarStyle.StarFilled} />
            ) : (
              <StarOutlined className={StarStyle.StarOutlined} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Star;
