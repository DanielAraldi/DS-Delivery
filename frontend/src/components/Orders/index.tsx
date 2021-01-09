import ProductsList from "../ProductsList";
import StepsHeader from "../StepsHeader";

import "./styles.css";

function Orders() {
  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList />
    </div>
  );
}

export default Orders;
