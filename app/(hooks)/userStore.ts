import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserInfoType {
  id: number;
  profileUrl: string;
  nickname: string;
  atk: any;
  rtk: any;
}

interface UserInfoState {
  userInfo: UserInfoType;
}

interface UserInfoActions {
  setUserInfo: (userInfo: UserInfoType) => void
  deleteUserInfo: () => void
}

const defaultState: UserInfoType = {id: 0, profileUrl: '', nickname: '', atk: null, rtk: null }

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
