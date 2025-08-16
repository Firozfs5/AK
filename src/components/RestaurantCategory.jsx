// import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItem,setSelectedIdx}) => {

  function handleClick(){
      setSelectedIdx(); 
  }

  return (
    <div className=''>
      {/* header */}
      <div className='bg-[#f0f0f0] w-[590px] my-2 p-2  rounded-md text-lg  '>

        <div className="flex justify-between items-center font-semibold" onClick={()=>handleClick()}>
          <span>{data.header_title}</span>
          <span>{showItem?'⬆️':'⬇️'}</span>
        </div>


      {/* categories within it */}
      {showItem && <ItemList items={data.dishes} />}

      </div>

    </div>
  )
}

export default RestaurantCategory;
