'use client';
import {useState} from'react';


const useStore = () =>{
    const [storeImage,setStoreImage] = useState<string>('');
    const [storeName,setStoreName] = useState<string>('');
    const [grade,setGrade] = useState<string>('');
    const [like,setLike] = useState<string>('');
    const [views,setViews] = useState<string>('');
    const [storeAddress,setStoreAddress] = useState<string>('');
    const [hashTagList,setHashTagList] = useState<string[]>([]);
    const [favorite,setFavorite] = useState<boolean>(false);



    

    const favoriteHandler = (isFavorite : boolean) => {
      console.log("현재 상태:", favorite); // 현재 상태 출력
      setFavorite(currentFavorite => !currentFavorite); // 상태 토글
    };
    
    return{
        storeImage,
        storeName,
        grade,
        like,
        views,
        storeAddress,
        hashTagList,
        favorite,
        setStoreImage,
        setStoreName,
        setGrade,
        setLike,
        setViews,
        setStoreAddress,
        setHashTagList,
        setFavorite,
        favoriteHandler
    }
}
export default useStore;