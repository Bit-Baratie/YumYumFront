import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserInfoType {
  memberId: number;
  profileUrl: string;
  nickname: string;
  jwt: any;
}

interface UserInfoState {
  userInfo: UserInfoType;
}

interface UserInfoActions {
  setUserInfo: (userInfo: UserInfoType) => void
  deleteUserInfo: () => void
}

const defaultState: UserInfoType = {memberId: 0, profileUrl: '', nickname: '', jwt: null }

const userStore = create(
  persist<UserInfoState & UserInfoActions>(
    (set) => ({
      userInfo: defaultState,
      setUserInfo: (userInfo: UserInfoType) => { set({ userInfo }) },
      deleteUserInfo: () => { set({ userInfo: defaultState }) },
    }),
    {
      name: 'user-info-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default userStore;
