'use client'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import userStore from "../userStore";
import MemberApi from "@/app/(api)/member/memberApi";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { patchMemberType } from "@/app/type";
import useLogin from "./useLogin";
import UserStore from "../userStore";

const useMember = () => {
  const { getLikeReview, getLikeStore, getMyReply, getMyReview, getProfile, patchMember, deleteMember } = MemberApi();
  const {logout} = useLogin();
  const pathname = usePathname();
  const {userInfo} = UserStore();
  const {data: profile} = useQuery({
    queryKey: ['profile'],
    queryFn:() => getProfile(),
    enabled: pathname === `/member/${userInfo.memberId}`
  });
  const {
    data: myReviewList,
    fetchNextPage: nextMyReviewList,
    isFetching: myReviewState
  } = useInfiniteQuery<any>({
    queryKey: ['myReview'],
    queryFn: ({pageParam}) => getMyReview({pageNumber:pageParam}),
    initialPageParam: 0,
    // enabled: pathname === `/member/${userInfo.memberId}`||pathname === `/member/${userInfo.memberId}/review`,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageNumber+1;
    }
  });
  const {
    data: myReplyList,
    fetchNextPage: nextMyReplyList,
    isFetching: myReplyState
  } = useInfiniteQuery<any>({
    queryKey: ['myReply'],
    queryFn: ({pageParam}) => getMyReply({pageNumber:pageParam}),
    initialPageParam: 0,
    // enabled: pathname === `/member/${userInfo.memberId}`||pathname === `/member/${userInfo.memberId}/reply`,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageNumber+1;
    }
  });
  const {
    data: likeReviewList,
    fetchNextPage: nextLikeReviewList,
    isFetching: likeReviewState
  } = useInfiniteQuery<any>({
    queryKey: ['likeReview'],
    queryFn: ({pageParam}) => getLikeReview({pageNumber:pageParam}),
    initialPageParam: 0,
    // enabled: pathname === `/member/${userInfo.memberId}`||pathname === `/member/${userInfo.memberId}/like`,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageNumber+1;
    }
  });
  const {
    data: likeStoreList,
    fetchNextPage: nextLikeStoreList,
    isFetching: likeStoreState
  } = useInfiniteQuery<any>({
    queryKey: ['likeStore'],
    queryFn: ({pageParam}) => getLikeStore({pageNumber:pageParam}),
    initialPageParam: 0,
    // enabled: pathname === `/member/${userInfo.memberId}`||pathname === `/member/${userInfo.memberId}/star`,
    getNextPageParam: (data) => {
        return data.last? undefined: data.pageNumber+1;
    }
  });
  const queryClient = useQueryClient();
  const updateMember = useMutation({
    mutationFn: (item: FormData) => patchMember(item),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['profile']});
    },
    onError: () => {
      alert('잠시후 다시 시도해주세요')
    }
  });
  const removeMember = useMutation({
    mutationFn: () => deleteMember(),
    onSuccess: () => {
      logout();
      Swal.fire("탈퇴가 완료되었습니다", "", "success");
      router.push('/');
    },
    onError: () => 
      alert('잠시후 다시 시도해주세요')
  });

  const [imageUrl, setImageUrl] = useState('/');
  const [file, setFile] = useState<any>();
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [updateModal, setUpdateModal] = useState(false);
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);

  const imageHandler = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setFile(file);
    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
    	if(reader.readyState === 2) {
        	// 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
          setImageUrl(e.target.result);
        }
    }
  }

  const nickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  }

  const passwordHanler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const passwordCheckHanler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  }

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const updateHandler = async () => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    if (nickName==='') {
      alert('닉네임을 입력해주세요');
      return;
    }
    if (phone==='') {
      alert('핸드폰번호를 입력해주세요');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const data = {
      nickname: nickName===profile.nickname? null: nickName,
      password: password===''? null: password,
      phoneNumber: phone,
      checkPassword: passwordCheck
    }
    formData.append('updateMemberDto', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    updateMember.mutate(formData);
  }

  const removeMemberHandler = () => {
    Swal.fire({
      title: "정말 탈퇴하시겠습니까?",
      text: '탈퇴 버튼 선택 시,  계정은 삭제되며 복구되지 않습니다.',
      showCancelButton: true,
      confirmButtonText: "탈퇴",
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        removeMember.mutate();
      }
    });
  }

  return {
    profile,
    myReplyList, 
    myReviewList, 
    likeReviewList, 
    likeStoreList,
    nickName,
    phone,
    updateModal,
    imageUrl,
    fileInput,
    myReplyState,
    myReviewState,
    likeReviewState,
    likeStoreState,
    nextMyReviewList,
    nextLikeReviewList,
    nextLikeStoreList,
    nextMyReplyList,
    imageHandler,
    nickNameHandler,
    passwordHanler,
    passwordCheckHanler,
    phoneHandler,
    updateHandler,
    removeMemberHandler,
    setUpdateModal,
    setImageUrl,
    setNickName,
    setPhone
  }
}

export default useMember;