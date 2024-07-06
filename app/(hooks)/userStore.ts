import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserInfoType {
  memberId: number;
  profileUrl: string;
  nickName: string;
  phoneNumber: string;
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

const defaultState: UserInfoType = {memberId: 0, profileUrl: '', nickName: '', phoneNumber: '', atk: null, rtk: null }

const UserStore = create(
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

export default UserStore;
