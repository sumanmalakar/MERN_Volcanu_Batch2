import { FaCartPlus } from "react-icons/fa";
import { data } from "../Data";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ setProducts }) => {
  // console.log("this is my location = ",useLocation())

  const location = useLocation();

  const filterByCategory = (cat) =>
    setProducts(data.filter((d) => d.category === cat));

  const filterByPrice = (price) =>
    setProducts(data.filter((d) => d.price >= price));

  return (
    <>
      <div className="Nav sticky-top">
        <div className="nav">
          <div className="brand">
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Volcanus.Cart
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder="search here..." />
          </div>
          <div className="cart">
            <FaCartPlus style={{ fontSize: "2rem" }} />
          </div>
        </div>
        {location.pathname == "/" && (
          <div className="sub_bar d-flex justify-content-around align-items-center">
            <div className="items">Filter by -{">"}</div>
            <div className="items" onClick={() => setProducts(data)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>
            <div className="items" onClick={() => filterByPrice(29999)}>
              {">="}29999
            </div>
            <div className="items" onClick={() => filterByPrice(49999)}>
              {">="}49999
            </div>
            <div className="items" onClick={() => filterByPrice(69999)}>
              {">="}69999
            </div>
            <div className="items" onClick={() => filterByPrice(89999)}>
              {">="}89999
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
