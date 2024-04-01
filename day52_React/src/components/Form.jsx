import React from "react";

const Form = () => {
  return (
    <>
      <div className="container p-3 mt-5 ">
        <form className="row d-flex justify-content-center align-items-center p-3">
          <div className="mb-3 col-md-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-md-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-md-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
