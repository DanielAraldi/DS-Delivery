import { Product } from "../pages/Orders/types";

export const checkIsSelected = (
  selectedProducts: Product[],
  product: Product
) => {
  return selectedProducts.some(({ id }) => id === product.id);
};
