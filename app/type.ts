// 멤버 회원가입 타입
export interface postMemberType {
  email: string;
  nickName: string;
  password: string;
  phoneNumber: string;
  imageUrl: string;
}

// 멤버 프로필 fetch 타입
export interface getMemberType {
  email: string
  imageUrl: string
  nickName: string
  password: null
  phoneNumber: string
}

// 멤버 프로필수정 타입
export interface patchMemberType {
  imageUrl: string;
  nickName: string;
  password: string|null;
  phoneNumber: string;
}

// 로그인 타입
export interface loginType {
  email: string;
  password: string;
}

// 맛집 등록 타입
export interface postStoreType {
  name: string;
  address: string;
  calls: string;
  hours: string;
  isClosed: boolean;
  latitude: number;
  longitude: number;
  imageList: File[];
  hashtagList: string[];
  menuList: menuType[];
}

// 맛집 fetch 타입
export interface getStoreType {
  storeId: number;
  name: string;
  address: string;
  totalFavoriteCount: number;
  totalReviewCount: number;
  imageList: string[];
  categoryName: string;
  views: number;
  imageUrl: string;
  hashtags: string[];
  favoriteStatus: boolean;
  avgGrade: number;
  hours: string;
  calls: string;
  menuList: menuType[];
  latitude: number;
  longitude: number;
}

// 이미지 타입
interface imageType {
  imageUrl: string; // 이미지의 URL
}

// 맛집 메뉴리스트 타입
interface menuType {
  name: string;
  price: number;
}

// 메뉴 정보수정 타입
export interface patchStoreType {
  name: string;
  call: string;
  address: string;
  hours: string;
  imageList: imageType[];
  hashtagList: string[];
}

// 리뷰 등록 타입
export interface postReviewType {
  storeId: number;
  content: string;
  grade: number;
  imageList: any[]|null;
}

// 리뷰 fetch 타입
export interface getReviewType {
  reviewId: number;
  imageUrl: string;
  nickname: string;
  createdAt: string;
  reviewTotalCount: number;
  grade: number;
  avgGrade: number;
  storeName: string;
  address: string;
  content: string;
  images: string[];

}

// 리뷰 수정 타입
export interface patchReviewType {
  content: string;
  grade: number;
  imageList: any[]|null;
}

// 리뷰 좋아요 타입
export interface likeReviewType {
  reviewId: number;
  status: boolean;
}

// 리뷰 신고 타입
export interface reportType {
  targetId: number;
  content: string;
  reportType: string;
}

export interface getReplyType {
  id: number;
  reviewId: number,
  nickName: string,
  createdAt: string,
  content: string,
}

// 관리자 페이지 타입
export interface adminMemberType {
  memberId: number;
  nickname: string;
  email: string;
  phoneNumber: string;
  isDeleted: boolean;
}

export interface adminStoreType {
  storeId: number;
  name: string;
  call: string;
  address: string;
  isClosed: boolean;
}

export interface adminReviewType {
  reportId: number;
  nickName: string;
  targetContent: string;
  targetId: number;
  content: string;
  createdAt: string;
}

export interface adminReplyType {
  reportId: number;
  nickName: string;
  targetContent: string;
  targetId: number;
  content: string;
  createdAt: string;
}