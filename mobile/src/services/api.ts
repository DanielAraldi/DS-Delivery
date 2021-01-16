import axios from "axios";

const API_URL = ""; /* Your URL API here! */

export const fetchOrders = () => axios(`${API_URL}/orders`);

export const confirmDelivey = (orderId: number) =>
  axios.put(`${API_URL}/orders/${orderId}/delivered`);
