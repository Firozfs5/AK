import RestaurantCard from "./RestaurantCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body=()=>{
 
 let [topResClicked,setTopResClicked]=useState(false);
 let [saveRes,setSaveRes]=useState(null);
 let [topRes,setTopRes]=useState(null);

 let [searchText,setSearchText]=useState("");
 
 useEffect(()=>{
    fetchData();
 },[])

  async function fetchData(){
    let rawData=await fetch('https://dummyjson.com/recipes');
    let data=await rawData.json();
    setSaveRes(data.recipes);
    setTopRes(data.recipes);
    console.log(data.recipes);
  }

 function  topRated(){
    console.log('clicked')
    if(topResClicked){
        setTopRes(saveRes);
        setTopResClicked(false)
    }else{
        setTopRes(topRes.filter((el)=>el.rating>=4.5));
        setTopResClicked(true);
    }
 }

  return (topRes==null)? <Shimmer /> : (
    <div className="body">
      <div className='filter'>

        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e)=>setSearchText(e.target.value)}/>
          <button
          onClick={()=>{
            let searchedRes=saveRes.filter((el)=>(el.name).toLowerCase().includes(searchText.toLowerCase()))
            console.log(searchedRes);
            
            setTopRes(searchedRes)
          }}
          >Search</button>
        </div>

        <button onClick={()=>topRated()} className="filter-btn">Top Rated Restaurant</button>
      </div>


      <div className='res-container'>

          {
            topRes.map((el,id)=> (<RestaurantCard 
              key={id}
              resName={el.name} 
              img={el.image} 
              cuisine={el.cuisine} 
              rating={el.rating}
              />))
          }

      </div>
    </div>
  )
}

export default Body;