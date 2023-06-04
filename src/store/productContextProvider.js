import { useState } from "react"
import productContext from "./productContext"
const ProductContextProvider=(props)=>{
const intialstate=[{
    name:"",
    description:"",
    price:"",
    sizeLarge:"",
    sizeSmall:"",
    sizeMedium:"",
}]

  const[product,setProduct]=  useState(intialstate)

    const addItemHandler=(data)=>{
        setProduct((prevState)=>{
            return[...prevState, data]
           
        })
    }

const productContextHelper={
    addItem:addItemHandler,
    items:product
    // name:product.name,
    // description:product.description,
    // price:+product.price,
    // sizeLarge:+product.sizeLarge,
    // sizeSmall:+product.sizeSmall,
    // sizeMedium:+product.sizeMedium,
}

    return(
       <productContext.Provider value={productContextHelper}>{props.children}</productContext.Provider>
    )
}
export default ProductContextProvider