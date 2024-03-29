import React, { useEffect, useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import { items } from "./Data";
import FormHandling from "./FormHandling";

const App = () => {
  const [product, setproducts] = useState(items);
  const superman = 100;

  useEffect(() => {
    document.title = product[0].category;
  }, [product]); // dependency array

  return (
    <>
      {/* <Navbar setproducts={setproducts} /> */}
      {/* <Products product={product} /> */}

      <FormHandling />
    </>
  );
};

export default App;
