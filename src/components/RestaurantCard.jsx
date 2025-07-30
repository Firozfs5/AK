const RestaurantCard=({resName,cuisine,rating,img})=>{
  // console.log(props);
  
  return (
    <div className="w-58 h-80 p-3 my-4 mx-[20px] bg-[#f0f0f0]  border-1 border-black rounded">
      <img src={img} className="w-[100%] rounded" alt="Restaurant image" />
      <h3 className="font-medium my-2">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>Rating {rating}</h4>
    </div>
  )
}

export default RestaurantCard;