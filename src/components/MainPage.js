import { Fragment } from "react";
import Form from "./Form";
import ProductStore from "./productStore";
import CartButton from "./Cart/CartButton";

const MainPage = () => {
  return (
    <Fragment>
      {" "}
      
      <Form></Form>
      <ProductStore></ProductStore>
    </Fragment>
  );
};
export default MainPage
