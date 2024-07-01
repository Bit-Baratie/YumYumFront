'use client'
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { naverApi } from "../(api)/member/socialApi";
import userStore from "../(hooks)/userStore";

const Callback = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const {setUserInfo} = userStore();

    useEffect(() => {
      const setToken = async () => {
        console.log(code)
        const res = await naverApi(code);
        setUserInfo(res.jwt);
      }
      
      setToken();
  }, [])

  return (
    <div>Loading...</div>
  );
}

export default Callback;