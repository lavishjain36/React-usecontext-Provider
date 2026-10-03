
import { createContext } from "react";


//create a context Object 
//context object will be used to share the data across the components
export const ProductContext = createContext();


//Provider component to provide the data to the  child component
export function ProductProvider({children}){

    const product={
        name:"Laptop",
        price:50000,
        category:"Electronics"
    };

    return (
        //Wrap the children with the provider and pass the product data as value
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )

}
