import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { OrderLocationData, Product } from "./types";

import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";
import ProductsList from "../../components/ProductsList";
import StepsHeader from "../../components/StepsHeader";

import { fetchProducts, saveOrder } from "../../services/api";

import { checkIsSelected } from "../../utils/checkIsSelected";
import { totalPrice } from "../../utils/totalPrice";

import "./styles.css";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]); /* A Products List */
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.log(error);
        toast.warning('Erro ao listar produtos!');
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(({ id }) => id !== product.id);
      return setSelectedProducts(selected);
    }

    return setSelectedProducts((previous) => [...previous, product]);
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Erro ao enviar pedido!");
      });
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
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice(selectedProducts)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Orders;
