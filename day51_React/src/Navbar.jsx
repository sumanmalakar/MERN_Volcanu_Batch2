import React from "react";
import { items } from "./Data";
const Navbar = ({ setproducts }) => {
    
  const filterByCategory = (cat) => {
    const filteredData = items.filter((data) => data.category === cat);
    // console.log(filteredData);
    setproducts(filteredData);
  };

  return (
    <>
      <div className="nav p-3 my-3 d-flex justify-content-center">
        <div className="btn btn-success mx-3">No filter</div>
        <div
          className="btn btn-primary mx-3"
          onClick={() => filterByCategory("mobiles")}
        >
          Mobiles
        </div>
        <div
          className="btn btn-warning mx-3"
          onClick={() => filterByCategory("laptops")}
        >
          Laptops
        </div>
        <div
          className="btn btn-secondary mx-3"
          onClick={() => filterByCategory("tablets")}
        >
          Tablets
        </div>
        <div className="btn btn-info mx-3">{">"}30000</div>
        <div className="btn btn-light mx-3">{">"}60000</div>
        <div className="btn btn-danger mx-3">{">"}80000</div>
      </div>
    </>
  );
};

export default Navbar;
