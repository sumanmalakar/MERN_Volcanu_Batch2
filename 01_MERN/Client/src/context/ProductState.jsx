import React from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  return (
    <ProductContext.Provider
      value={{
        data: 10,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
