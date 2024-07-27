'use client'
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import userStore from "../(hooks)/userStore";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const Callback = () => {
  const searchParams = useSearchParams();
  const atk: any = searchParams.get('atk');
  const rtk: any = searchParams.get('rtk');
  const router = useRouter();
  const { setToken } = userStore();
  const cookies = useCookies();

    useEffect(() => {
      setToken({
        atk: atk
      });
      cookies.set('rtk', rtk);
      router.push('/');
  }, [])

  return (
    <div>Loading...</div>
  );
}

export default Callback;