import React from "react";

const AddProduct = () => {
  return (
    <>
      <div
        className="container mx-auto my-3 p-5 bg-black text-light"
        style={{
          width: "600px",
          border: "1px solid yellow",
          borderRadius: "10px",
        }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control bg-black text-light" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control bg-black text-light" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select bg-black text-light"
              aria-label="Default select example" required
            >
              <option selected>--Select Product Category--</option>
              <option value="1">Mobiles</option>
              <option value="2">Tablets</option>
              <option value="3">Laptops</option>
              <option value="4">HeadPhones</option>
              <option value="5">Cameras</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="text" className="form-control bg-black text-light" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="text" className="form-control bg-black text-light" required />
          </div>

          <div className="mb-3">
            <label className="form-label">ImgSrc</label>
            <input type="text" className="form-control bg-black text-light" required />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
