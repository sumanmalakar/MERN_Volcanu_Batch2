import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        {products.map((data) => (
          <Link to={`/${data.id}`}
            key={data.id}
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{textDecoration:'none'}}
          >
            <div
              className="card bg-dark text-light text-center my-3"
              style={{ width: "18rem" }}
            >
              <div className="d-flex justify-content-center align-items-center p-3">
                <img
                  src={data.imgSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href="#" className="btn btn-primary mx-3">
                  {data.price}
                </a>
                <a href="#" className="btn btn-warning">
                  Add To Cart
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Product;
