import { useEffect, useState } from "react";

import { OrderLocationData, Product } from "./types";

import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";
import ProductsList from "../../components/ProductsList";
import StepsHeader from "../../components/StepsHeader";

import { fetchProducts } from "../../services/api";

import { checkIsSelected } from "../../utils/checkIsSelected";

import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]); /* A Products List */
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(({ id }) => id !== product.id);
      return setSelectedProducts(selected);
    }

    return setSelectedProducts((previous) => [...previous, product]);
  };

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList
        products={products}
        onSelectProduct={handleSelectProduct}
        seletedProducts={selectedProducts}
      />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
      <OrderSummary />
    </div>
  );
}

export default Orders;
