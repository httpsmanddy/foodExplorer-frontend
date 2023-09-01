import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-food-explorer-wx2u.onrender.com'
});