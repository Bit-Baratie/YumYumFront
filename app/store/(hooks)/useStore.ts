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
    const [favorite,setFavorite] = useState<boolean>();



    

    const favoriteHandler = (isFavorite : boolean,) =>{
        setFavorite(isFavorite => !isFavorite);
        console.log(isFavorite);
    }
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