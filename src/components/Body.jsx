import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"; 
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import React from "react";

export const Body=()=>{
 
 let [topResClicked,setTopResClicked]=useState(false);
 let [saveRes,setSaveRes]=useState(null);
 let [topRes,setTopRes]=useState(null);
 let [searchText,setSearchText]=useState("");
 
 let RestaurantCardPromotes=withPromotedLabel(RestaurantCard);
 let {loggedInUser,setName}=useContext(UserContext);

 useEffect(()=>{
    fetchData();
 },[])

  async function fetchData(){
    let rawData=await fetch('https://dummyjson.com/recipes');
    let data=await rawData.json();
    setSaveRes(data.recipes);
    // console.log(data.recipes)
    setTopRes(data.recipes);
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
    <div className=" " data-testid="bodyCard">
      <div className='flex justify-between mb-2 p-3'>

        <div className="ml-8 ">
          <input 
          type="text" 
          data-testid="searchBar"
          className="border-1 border-black py-1 mr-3 w-64 p-1" 
          value={searchText} 
          onChange={(e)=>setSearchText(e.target.value)}/>

          <button className="border-1 border-black rounded px-3 py-1 hover:bg-black font-semibold hover:text-white"
          onClick={()=>{
            let searchedRes=saveRes.filter((el)=>(el.name).toLowerCase().includes(searchText.toLowerCase()))
            console.log(searchedRes);
            
            setTopRes(searchedRes)
          }}
          >Search</button>
        </div>

        <div>
          <input type="text" className="border border-black w-48 h-8 rounded p-1 mr-3" placeholder="User Name" value={loggedInUser} onChange={(e)=>setName(e.target.value)} />
          <button 
          className={(topResClicked)?"border-1 border-black rounded px-3 py-1 bg-black font-semibold text-white ":"border-1 border-black rounded px-3 py-1 hover:bg-black font-semibold hover:text-white "} 
          onClick={()=>topRated()} >Top Rated Restaurant</button>
 
        </div>

      </div>


      <div className='p-3 flex flex-wrap justify-center'>

          {
            
            topRes.map((el,id)=> (
            <Link  to={"/restaurants/"+el.id} key={id}>
                {console.log(el)}
              {
                (el.difficulty=='Easy')?
                (<RestaurantCardPromotes resName={el.name} img={el.image} cuisine={el.cuisine} rating={el.rating} />): 
                (<RestaurantCard resName={el.name} img={el.image} cuisine={el.cuisine} rating={el.rating}/>)
              }

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