import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null)
//created a context 

const StoreContextProvider = (props) =>{
    //before this cartItems , we made the sateVariable inside FoodItems iself , but , creating state for each and every item is not a good practice so, 
    //we making the cartItems in context , building the add , remove from cart also
    const [cartItems,setCartItems] = useState({});
    
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
       
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    //any element(valu or fun) added in this obj , can be acesssble by every componet using the context
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider