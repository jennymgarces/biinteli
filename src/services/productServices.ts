import { Product } from "@/interfaces/Product";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getProducts = async (): Promise<AxiosResponse<Product[]>> =>
  await axios.get("/products");

export const getProduct = async (id: string): Promise<AxiosResponse<Product>> =>
  await axios.get(`/products/${id}`);

export const createProduct = async (product: Product): Promise<AxiosResponse> =>
  await axios.post("/products", product);

export const updateProduct = async (
  id: string,
  newProduct: Product
): Promise<AxiosResponse<Product>> => await axios.put(`/products/${id}`, newProduct);

export const deleteProduct = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/products/${id}`);