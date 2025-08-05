import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList=(items)=>{

    let dispatch=useDispatch();

    function handleAddBtn(itm){
        dispatch(addItem(itm));
    }
    
    return (
        <div className="mt-2">
            {
                items.items.map((itm,idx)=>{
                    return (
                        <div key={idx} className="bg-white p-2 mb-2 border-b-1">
                            <h1 className="font-bold ">{itm.name}</h1>
                            <p>{itm.details}</p>
                            <button 
                            className="font-medium border-2 border-black p-1 rounded-xl hover:text-white hover:bg-black"
                            onClick={()=>handleAddBtn(itm)}
                            >Add ✚</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;