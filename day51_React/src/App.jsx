import React, { useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import { items } from "./Data";

const App = () => {
  const [product, setproducts] = useState(items);
  return (
    <>
      <Navbar setproducts={setproducts} />
      <Products product={product} />
    </>
  );
};

export default App;
