const CartButton=(props)=>{
    return(
        <button onClick={props.cartOpen}>
            <span>CArt</span>
            <span>0</span>
        </button>
    )
}
export default CartButton