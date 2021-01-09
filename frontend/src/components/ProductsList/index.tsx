import { checkIsSelected } from "../../utils/checkIsSelected";
import ProductCard from "../ProductCard";

import { Product } from "./../../pages/Orders/types";

import "./styles.css";

type Props = {
  products: Product[];
  seletedProducts: Product[];
  onSelectProduct: (product: Product) => void;
};

function ProductsList({ products, onSelectProduct, seletedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(seletedProducts, product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
