import { useEffect, useState } from "react";

import { Product } from "./types";

import ProductsList from "../ProductsList";
import StepsHeader from "../StepsHeader";

import { fetchProducts } from "../../services/api";

import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]); /* A Products List */

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  );
}

export default Orders;
