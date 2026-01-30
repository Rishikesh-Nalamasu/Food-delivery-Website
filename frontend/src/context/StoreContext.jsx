import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
//created a context 

const StoreContextProvider = (props) =>{

    //any element(valu or fun) added in this obj , can be acesssble by every componet using the context
    const contextValue = {
        food_list
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider