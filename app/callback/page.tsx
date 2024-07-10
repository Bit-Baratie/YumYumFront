'use client'
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { naverApi } from "../(api)/member/socialApi";
import userStore from "../(hooks)/userStore";
import { useRouter } from "next/navigation";

const Callback = () => {
  const searchParams = useSearchParams();
  const atk: any = searchParams.get('atk');
  const rtk: any = searchParams.get('rtk');
  const router = useRouter();
  const { setToken } = userStore();

    useEffect(() => {
      setToken({
        atk: atk,
        rtk: rtk
      });
      router.push('/');
  }, [])

  return (
    <div>Loading...</div>
  );
}

export default Callback;