import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL; /* Your URL API here! */
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX; /* Your token mapbox here! */

export const fetchProducts = () => {
    return axios(`${API_URL}/products`);
}

export const fetchLocalMapBox = (local: string) => {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}