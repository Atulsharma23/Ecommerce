import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/addproduct")
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Check if the response is an array (JSON data)
          setProducts(response.data);
          console.log("Data is here", response.data);
        } else {
          // Handle unexpected response format
          setError("Unexpected response format from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      });
  }, []);

  return (
    <>
      <Header />

      <div className="prod">
        <h1>Product List</h1>

        {error ? (
          <p>{error}</p>
        ) : (
          <div className="cards-head">
            {products.map((Product) => (
              <div key={Product.id} className="product-card">
                <h1>{Product.name}</h1>
                <p>Price: ${Product.price}</p>
                <p>Description: {Product.description}</p>
                <Button>Buy</Button>{" "}
                <Link to={`/updateproduct/${Product.id}`}>
                  <Button>Update</Button>
                </Link>{" "}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
