import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{

    let cart=useSelector((store)=>store.cart.items);
    console.log(cart);

    let dispatch=useDispatch();

    function handleClearBtn(){
        dispatch(clearCart())
    }
    

    return (
        <div className="p-4">
        <div className="flex justify-between  ">
            <h1 className="text-3xl font-semibold">Cart Section</h1>
            <button 
            className="bg-white border-2 text-black p-2 rounded-xl font-semibold hover:bg-black hover:text-white"
            onClick={()=>handleClearBtn()}
            >Clear Cart</button>
        </div>

        <div className="flex flex-col items-center mt-6">
            {
                cart.map((itm,idx)=>{
                    return (
                        <div key={idx} className="bg-white w-6/12 p-2 mb-2 rounded-xl border-1">
                            <h1 className="font-bold ">{itm.name}</h1>
                            <p>{itm.details}</p>
                            <button 
                            className="font-medium border-2 mt-2 border-black p-1 rounded-xl hover:text-white hover:bg-black"
                            onClick={()=>handleAddBtn(itm)}
                            >Remove ➖</button>
                        </div>
                    )
                })
            }
        </div>        
        
        </div>

    )
}

export default Cart;