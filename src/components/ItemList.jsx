const ItemList=(items)=>{
    // console.log(items.items);
    
    return (
        <div className="mt-2">
            {
                items.items.map((itm,idx)=>{
                    return (
                        <div key={idx} className="bg-white p-2 mb-2 border-b-1">
                            <h1 className="font-bold ">{itm.name}</h1>
                            <p>{itm.details}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;