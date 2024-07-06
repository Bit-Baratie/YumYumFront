import WrapperStyle from '@/app/(component)/member/wrapper.module.scss';
import Link from 'next/link';

const Wrapper = ({title, children, link, totalCnt}: any) => {
  return (
    <div className={WrapperStyle.dashboard}>
      <div className={WrapperStyle.head}>
        <div className={WrapperStyle.title}>{title}</div>
        <span className={WrapperStyle.cnt}>{totalCnt}개</span> <Link href={link}><span className={WrapperStyle.all}>전체보기 &gt;</span></Link>
      </div>
        <div className={WrapperStyle.wrapper}>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;