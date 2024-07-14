import ProfileSkeleton from './profile';
import './shimmer.scss';

const ReviewSkeleton = () => {
  return (
    <div className="skeleton shimmer" style={{width: '700px', height: '500px', borderRadius:'20px', gap:'20px', marginTop:'20px'}}>
      <ProfileSkeleton/>
      <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
        <div className="shimmer" style={{ width: "80%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "80%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "80%", height: "10px" }}>
          <div className="skeleton"></div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div className="shimmer" style={{ width: "150px", height: "150px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "150px", height: "150px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "150px", height: "150px" }}>
          <div className="skeleton"></div>
        </div>
        <div className="shimmer" style={{ width: "150px", height: "150px" }}>
          <div className="skeleton"></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSkeleton;