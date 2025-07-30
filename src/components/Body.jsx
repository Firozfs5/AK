import RestaurantCard from "./RestaurantCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    <div className=" ">
      <div className='flex justify-between mb-2 p-3'>

        <div className="ml-8 ">
          <input 
          type="text" 
          className="border-1 border-black py-1 mr-3 w-64" 
          value={searchText} 
          onChange={(e)=>setSearchText(e.target.value)}/>

          <button className="border-1 border-black rounded px-3 py-1"
          onClick={()=>{
            let searchedRes=saveRes.filter((el)=>(el.name).toLowerCase().includes(searchText.toLowerCase()))
            console.log(searchedRes);
            
            setTopRes(searchedRes)
          }}
          >Search</button>
        </div>

        <button className="border-1 border-black rounded px-3 py-1" onClick={()=>topRated()} >Top Rated Restaurant</button>
      </div>


      <div className='p-3 flex flex-wrap justify-center'>

          {
            
            topRes.map((el,id)=> (
            <Link  to={"/restaurants/"+el.id} key={id}>
            <RestaurantCard 
              
              resName={el.name} 
              img={el.image} 
              cuisine={el.cuisine} 
              rating={el.rating}
              />
              </Link>
              ))
              
          }

      </div>

    </div>
  )
}

export default Body;


// 

// 