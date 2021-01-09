import { useEffect, useState } from "react";

import { OrderLocationData, Product } from "./types";

import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";
import ProductsList from "../../components/ProductsList";
import StepsHeader from "../../components/StepsHeader";

import { fetchProducts } from "../../services/api";

import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]); /* A Products List */
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
      <OrderSummary />
    </div>
  );
}

export default Orders;
