import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Product = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center text-center">
        {products.map((data) => (
          <div key={data._id} className="col-md-4 my-3 p-2" 
        //   style={{border:"1px solid white"}}
          >
            <div>
              <img
                src={data.imgsrc}
                
                style={{
                  width: "250px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "2px solid yellow",
                }}
              />
            </div>
            <h3 className="mt-3">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
