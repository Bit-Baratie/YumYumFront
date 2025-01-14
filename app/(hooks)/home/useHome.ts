'use client'
import HomeApi from "@/app/(api)/home/homeApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useHome = () => {
  const {getTop10, getMonth, getStar, getViews} = HomeApi();
  const [local, setLocal] = useState('서울');
  const [select, setSelect] = useState('top10');
  const {data: top10} = useQuery({queryKey: ['top10', local], queryFn:() => getTop10(local), enabled: select==='top10'});
  const {data: month} = useQuery({queryKey: ['month', local], queryFn:() =>  getMonth(local), enabled: select==='month'});
  const {data: star} = useQuery({queryKey: ['star', local], queryFn:() =>  getStar(local), enabled: select==='star'});
  const {data: views} = useQuery({queryKey: ['views', local], queryFn:() =>  getViews(local), enabled: select==='views'});
  const [data, setData] = useState(top10);

  useEffect(() => {
    if (select === 'top10') setData(top10);
    else if (select === 'month') setData(month);
    else if (select === 'star') setData(star);
    else if (select === 'views') setData(views);
  }, [top10, month, star, views, select]);

  const fetchTop10 = () => {
    setSelect('top10');
  }

  const fetchMonth = () => {
    setSelect('month');
  }

  const fetchStar = () => {
    setSelect('star');
  }

  const fetchViews = () => {
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