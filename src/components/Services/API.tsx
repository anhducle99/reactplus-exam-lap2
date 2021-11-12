import axios from "axios";
import { Product } from "../TypeInterFace";

export const axiosAPI = axios.create({
  baseURL: "https://5d36d86c86300e0014b647c7.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const listProductAPI = {
  getAll() {
    const url = `/products`;
    return axiosAPI.get(url);
  },
  add(itemProduct: Product) {
    const url = `/products`;
    axiosAPI.post(url, itemProduct);
  },
  delete(id: string) {
    const url = `/products/${id}`;
    axiosAPI.delete(url);
  },
  update(id: string, itemProduct: Product) {
    const url = `/products/${id}`;
    axiosAPI.put(url, itemProduct);
  },
};
