// import { useContext } from "react";
import React from "react";
// import UserContext from "../utils/UserContext";

const RestaurantCard=({resName,cuisine,rating,img})=>{
  // console.log(props);
  // let {loggedInUser}=useContext(UserContext)
  return (
    <div data-testid="resCard" className="w-58 h-80 p-3 my-4 mx-[20px] bg-[#f0f0f0]  rounded">
      <img src={img} className="w-[100%] rounded" alt="Restaurant image" />
      <h3 className="font-medium my-2">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>Rating {rating}</h4>
      {/* <h5>User Name : {loggedInUser}</h5> */}
    </div>
  )
}

export default RestaurantCard;


// with promoted label

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div >
        <span className="absolute bg-black text-white p-1 px-2 font-mono rounded ml-4.5">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

