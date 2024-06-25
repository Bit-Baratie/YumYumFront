'use client';
import {useState} from'react';
import StoreInfo from "../(component)/StoreInfo";


const useStore = () =>{
    const [storeImage,setStoreImage] = useState<string>('');
    const [storeName,setStoreName] = useState<string>('');
    const [grade,setGrade] = useState<string>('');
    const [like,setLike] = useState<string>('');
    const [views,setViews] = useState<string>('');
    const [storeAddress,setStoreAddress] = useState<string>('');
    const [hashTagList,setHashTagList] = useState<string[]>([]);
    const [favorite,setFavorite] = useState<boolean>(false);
    const [favoriteColor,setFavoriteColor] = useState<string>('#E2E2E2')


    

    // const favoriteHandler = (isFavorite : boolean) =>{
    //     setFavorite(isFavorite);
    //     if(favorite === true){
    //         setFavoriteColor('#FFC657');
    //     }else{
    //         setFavoriteColor('#E2E2E2');
    //     }
    // }
    return{
        storeImage,
        storeName,
        grade,
        like,
        views,
        storeAddress,
        hashTagList,
        favorite,
        favoriteColor,
        setStoreImage,
        setStoreName,
        setGrade,
        setLike,
        setViews,
        setStoreAddress,
        setHashTagList,
        setFavorite,
        setFavoriteColor,
        // favoriteHandler
    }
}
export default useStore;