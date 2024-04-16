import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./Data";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <Router>
        <Navbar setProducts={setProducts} />
        <Routes>
          <Route path="/" element={<Product products={products} />} />
          <Route path="/:id" element = {<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
