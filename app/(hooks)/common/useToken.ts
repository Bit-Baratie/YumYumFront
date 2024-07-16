'use client'
import UserStore from '@/app/(hooks)/userStore';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import Swal from 'sweetalert2';

const useToken = () => {
  const { token, userInfo } = UserStore();
  const router = useRouter();

  const authCheckStore = () => {
    if (token.atk && token.rtk) {
      router.push('/store')
    } else {
      Swal.fire({
        title: '로그인이 필요합니다',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFC933',
        cancelButtonColor: '#FF7F7F',
        confirmButtonText: '로그인 페이지로 이동',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/member/login');
        }
      });
    }
  }

  const authCheckFavorite = () => {
    if (token.atk && token.rtk) {
      router.push(`/member/${userInfo.memberId}/star`)
    } else {
      Swal.fire({
        title: '로그인이 필요합니다',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFC933',
        cancelButtonColor: '#FF7F7F',
        confirmButtonText: '로그인 페이지로 이동',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/member/login');
        }
      });
    }
  }
  const authCheckReview = () => {
    if (token.atk && token.rtk) {
      router.push("/review")
    } else {
      Swal.fire({
        title: '로그인이 필요합니다',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFC933',
        cancelButtonColor: '#FF7F7F',
        confirmButtonText: '로그인 페이지로 이동',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/member/login');
        }
      });
    }
  }

  return { authCheckStore, authCheckFavorite, authCheckReview }
}

export default useToken;