import HomeApi from "@/app/(api)/home/homeApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useHome = () => {
  const {getTop10, getMonth, getStar, getViews} = HomeApi();
  const [local, setLocal] = useState('서울');
  const {data: top10} = useQuery({queryKey: ['top1', local], queryFn:() => getTop10(local)});
  const {data: month} = useQuery({queryKey: ['month', local], queryFn:() =>  getMonth(local)});
  const {data: star} = useQuery({queryKey: ['star', local], queryFn:() =>  getStar(local)});
  const {data: views} = useQuery({queryKey: ['views', local], queryFn:() =>  getViews(local)});
  const [data, setData] = useState(top10);
  const [select, setSelect] = useState('top10');

  const fetchTop10 = () => {
    setData(top10);
    setSelect('top10');
  }

  const fetchMonth = () => {
    setData(month);
    setSelect('month');
  }

  const fetchStar = () => {
    setData(star);
    setSelect('star');
  }

  const fetchViews = () => {
    setData(views);
    setSelect('views');
  }

  return {
    setLocal,
    select,
    fetchTop10,
    fetchMonth,
    fetchStar,
    fetchViews,
    data
  };
}

export default useHome;