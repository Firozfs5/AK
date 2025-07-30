import { useEffect, useState } from "react";


const useRestaurantMenue=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    console.log(resId);
    
    useEffect(()=>{
        fetchMenue();
    },[])

    async function fetchMenue(){
      const data=await fetch(`https://dummyjson.com/recipes/${resId}`);
      const json=await data.json();
      console.log(json);
      setResInfo(json)
      
    }

    return resInfo

}

export default useRestaurantMenue;