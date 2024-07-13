import { Skeleton } from "@nextui-org/react";
import './shimmer.scss';

const ProfileSkeleton = () => {
  return (
    <div style={{ maxWidth: '300px', width: '100%', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div>
        <Skeleton className='shimmer' style={{ display: 'flex', borderRadius: '9999px', width: '150px', height: '150px', backgroundColor: '#e5e7eb' }} />
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Skeleton className='shimmer' style={{ height: '15px', width: '70%', borderRadius: '8px', backgroundColor: '#e5e7eb' }} />
        <Skeleton className='shimmer' style={{ height: '15px', width: '100%', borderRadius: '8px', backgroundColor: '#e5e7eb' }} />
        <Skeleton className='shimmer' style={{ height: '15px', width: '80%', borderRadius: '8px', backgroundColor: '#e5e7eb' }} />
      </div>
    </div>
  );
}

export default ProfileSkeleton;