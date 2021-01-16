import { Product } from "../pages/Orders/types";

export const totalPrice = (selectedProducts: Product[]) =>
  selectedProducts.reduce((acc, { price }) => {
    return acc + price;
  }, 0);
