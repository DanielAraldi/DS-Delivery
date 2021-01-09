import { useEffect, useState } from "react";

import { OrderLocationData, Product } from "./types";

import OrderLocation from "../OrderLocation";
import ProductsList from "../ProductsList";
import StepsHeader from "../StepsHeader";

import { fetchProducts } from "../../services/api";

import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]); /* A Products List */
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
}

export default Orders;
