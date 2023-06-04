import { useContext, useRef } from "react";
import productContext from "../store/productContext";

const Form = () => {
const productCtx=useContext(productContext)


  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const largeSizeRef = useRef();
  const smallSizeRef = useRef();
  const mediumSizeRef = useRef();

  const formDataHandler = (event) => {
    event.preventDefault();
    const myobj = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      sizeLarge: largeSizeRef.current.value,
      sizeMedium: mediumSizeRef.current.value,
      sizeSmall: smallSizeRef.current.value,
    };
    console.log(myobj);
    productCtx.addItem(myobj)

  };

  return (
    <form onSubmit={formDataHandler}>
      <label>SHOES NAME</label>
      <input type="text" ref={nameRef}></input>
      <label>DESCRIPTION</label>
      <input type="text" ref={descriptionRef}></input>
      <label>price</label>
      <input type="tel" ref={priceRef}></input>
      <h1>product size</h1>
      <label>size large</label>
      <input type="tel" ref={largeSizeRef}></input>
      <label>size small</label>
      <input type="tel" ref={smallSizeRef}></input>
      <label>size Medium</label>
      <input type="tel" ref={mediumSizeRef}></input>

      <button>Add Shoes</button>
    </form>
  );
};
export default Form;
