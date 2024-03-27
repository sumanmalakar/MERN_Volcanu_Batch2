import React, { useState } from "react";
const Products = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((p) => (
            <div key={p.id} className="col-md-4 col-lg-4 my-3">
              <div
                className="card bg-dark text-center"
                style={{ width: "18rem" }}
              >
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={p.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "120px" }}
                  />
                </div>
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                  <a href="#" className="btn btn-primary mx-3">
                    {p.price}
                  </a>
                  <a href="#" className="btn btn-warning">
                    Add To cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
