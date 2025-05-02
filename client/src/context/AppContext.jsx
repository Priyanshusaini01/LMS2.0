import { createContext } from "react";

export const AddContext = createContext();

export const AppcontextProvider = (props)=>{
        const value={
            // Add your context values here
        }
    return (
        <AddContext.Provider value={value}>
         {props.children }
        </AddContext.Provider>
    )
}