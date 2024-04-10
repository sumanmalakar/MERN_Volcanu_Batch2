import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="brand">
          <h2>Shopping.Cart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search here..." />
        </div>
        <div className="cart">
          <FaCartPlus style={{fontSize:"2rem"}} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
