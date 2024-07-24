import { useEffect, useState } from "react";
import axios from "axios";
// import "./allproduct.css";
import Api from "../axiosConfig";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");

  async function GetProducts() {
    // alert("Hi from get Products.");
    try {
      const response = await Api.get("/product/get-all-product");

      //   console.log(response.data);
      setAllProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // api call to backend
    GetProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {allProducts.map((product) => (
          <div
            style={{
              width: "23%",
              height: "300px",
              border: "2px solid black",
              marginBottom: "20px",
              fontSize:"12px",
            }}
          >
            <img style={{ width: "80%", height: "50%" }} src={product.image} />
            <p style={{}}>Name : {product.name}</p>
            <p>Price : {product.price}/-</p>
            <p>Category : {product.category}</p>
            <p>Quantity : {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;