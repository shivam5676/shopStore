import { useContext } from "react";
import productContext from "../store/productContext";

const ProductStore=()=>{
   const productCtx= useContext(productContext)
   console.log( productCtx.items)
    return(
        <div style={{backgroundColor:"red"}}>
            <h3>{productCtx.name}</h3>
            <h3>{productCtx.description}</h3>
            <h3>{productCtx.price}</h3>
            <h4>sizeLarge{productCtx.sizeLarge}</h4>
            <h4>sizeSmall{productCtx.sizeSmall}</h4>
            <h4>sizeSmall{productCtx.sizeMedium}</h4>
        </div>
    )
}
export default ProductStore