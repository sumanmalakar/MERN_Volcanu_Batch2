import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { data } from "./Data";
const App = () => {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
      <Product products={products} />
    </>
  );
};

export default App;
