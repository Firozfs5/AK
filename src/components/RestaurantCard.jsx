const RestaurantCard=({resName,cuisine,rating,img})=>{
  // console.log(props);
  
  return (
    <div className="res-card">
      <img src={img} alt="Restaurant image" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>Rating {rating}</h4>
    </div>
  )
}

export default RestaurantCard;