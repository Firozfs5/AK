import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenue=()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams()
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

    return (resInfo==null)?<Shimmer />:(
        <div>
            <h3>Name of the Restaurant :{resInfo.name}</h3>
            <img src={resInfo.image} style={{width:'300px',borderRadius:"12px"}} alt="" />
            <h5>Ingredients are </h5>
            <ul>
                {
                    resInfo.ingredients.map((el,idx)=>{
                        return <li key={idx}>{el}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenue;