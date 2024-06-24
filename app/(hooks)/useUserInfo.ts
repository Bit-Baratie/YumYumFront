import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserInfoType {
  memberId: number,
  profileUrl: string,
  nickname: string
}

interface UserInfoState {
  userInfo: UserInfoType
}

interface UserInfoActions {
  setUserInfo: (userInfo: UserInfoType) => void
  deleteUserInfo: () => void
}

const defaultState: UserInfoType = {memberId: 0, profileUrl: '', nickname: '' }

const useUserInfo = create<UserInfoState & UserInfoActions>()(
  persist(
    (set) => ({
      userInfo: defaultState,
      setUserInfo: (userInfo: UserInfoType) => { set({ userInfo }) },
      deleteUserInfo: () => { set({ userInfo: defaultState }) },
    }),
    {
      name: 'user-info-storage',
    }
  )
);

export default useUserInfo;
