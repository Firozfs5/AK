import useRestaurantMenue from "../utils/useRestaurantMenue";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { accordian } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenue=()=>{

    const {resId}=useParams()
    const resInfo=useRestaurantMenue(resId);
    const [selectedIdx,setSelectedIdx]=useState();

    return (resInfo==null)?<Shimmer />:(
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl my-3">{resInfo.name}</h3>
            <h4  className="font-bold text-xl">{resInfo.tags.join(', ')}</h4>

            {
                accordian.map((category,idx)=>{
                    return (
                        <RestaurantCategory key={idx}  
                         data={category} 
                         showItem={idx==selectedIdx}
                         setSelectedIdx={()=>{
                            (idx==selectedIdx)?setSelectedIdx(null):
                            setSelectedIdx(idx)
                        }
                    }
                         />
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenue;