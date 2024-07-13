import { Card } from "@nextui-org/react";
import './shimmer.scss';

const CardSkeleton = () => {
  return (
    <div className="card" style={{ width: "190px", padding: "16px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "20px", height:'140px' }}>
      <div className="shimmer" style={{ height: "80px" }}>
        <div className="skeleton"></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div className="shimmer" style={{ width: "60%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "80%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "40%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;