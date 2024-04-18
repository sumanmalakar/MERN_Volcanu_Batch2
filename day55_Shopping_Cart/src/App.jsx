import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./Data";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchProduct from "./components/SearchProduct";
import Test from "./components/Test";
import Cart from "./components/Cart";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const addToCart = (product) =>{ setCart([...cart, product])
    toast.success("Item added Successfully...!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  console.log("Cart Items...", cart);
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar setProducts={setProducts} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Product products={products} addToCart={addToCart} />}
          />
          <Route path="/:id" element={<ProductDetail />} />
          <Route
            path="/search/:term"
            element={<SearchProduct setProducts={setProducts} />}
          />
          <Route path="/test" element={<Test />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
