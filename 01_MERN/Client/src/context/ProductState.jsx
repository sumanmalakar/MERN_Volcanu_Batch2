import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/get`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log("Fetching Data ", api.data.product);
      console.log("Fetching Data ", api.data.product);
      setProducts(api.data.product);
    };
    fetchProduct();
  }, [reload]);

  // add Product
  const addProduct = async (
    title,
    description,
    price,
    qty,
    imgsrc,
    category
  ) => {
    const api = await axios.post(
      `${url}/product/add`,
      {
        title,
        description,
        price,
        qty,
        imgsrc,
        category,
      },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    setReload(!reload);
    return api.data;
    // console.log(api)
  };




  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        url
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
