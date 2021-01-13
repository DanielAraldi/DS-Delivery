import axios from "axios";

const API_URL = 'http://192.168.0.109:8080' /* Your URL API here! */

export const fetchOrders = () => axios(`${API_URL}/orders`);