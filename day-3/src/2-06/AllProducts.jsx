import { useEffect, useState } from "react";
import axios from "axios";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");

  async function GetProducts() {
    // alert("Hi from get Products.");
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      //   console.log(response.data);
      setAllProducts(response.data);
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
              height: "500px",
              border: "2px solid black",
              marginBottom: "20px",
              fontSize:"12px",
            }}
          >
            <img style={{ width: "50%", height: "30%" }} src={product.image} />
            <p style={{}}>Title : {product.title}</p>
            <p>Price : {product.price}/-</p>
            <p>Category : {product.category}</p>
            <p>Description : {product.description}</p>
            {/* <p>Rating : {product.rating}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;