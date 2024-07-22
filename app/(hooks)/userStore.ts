import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface userInfoType {
  memberId: number;
  imageUrl: string;
  nickName: string;
  phoneNumber: string;
}

interface tokenType{
  atk: string;
  rtk: string;
}

interface userState {
  userInfo: userInfoType;
  token: tokenType;
}

interface userActions {
  setUserInfo: (userInfo: userInfoType) => void;
  setToken: (token: tokenType) => void;
  deleteToken: () => void;
  deleteUserInfo: () => void;
}

const defaultToken: tokenType = {atk: '', rtk: ''}
const defaultUserInfo: userInfoType = { memberId: 0, imageUrl: '', nickName: '', phoneNumber: '' }

const UserStore = create(
  persist<userState & userActions>(
    (set) => ({
      userInfo: defaultUserInfo,
      token: defaultToken,
      setUserInfo: (userInfo: userInfoType) => { set({ userInfo }) },
      setToken: (token: tokenType) => {set({token})},
      deleteToken: () => {set({token: defaultToken})},
      deleteUserInfo: () => { set({ userInfo: defaultUserInfo }) },
    }),
    {
      name: 'user-info-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default UserStore;
