import StarStyle from "./starStyle.module.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const Star = ({ rating, handleStarClick }: any) => {
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
              <StarFilled className={StarStyle.StarFilled}/>
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
