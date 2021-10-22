import { Provider } from "@/interfaces/Provider";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getProviders = async (): Promise<AxiosResponse<Provider[]>> =>
  await axios.get("/providers");

/*export const getProduct = async (id: string): Promise<AxiosResponse<Provider>> =>
  await axios.get(`/products/${id}`);

export const createProduct = async (product: Provider): Promise<AxiosResponse> =>
  await axios.post("/products", product);

export const updateProduct = async (
  id: string,
  newProduct: Provider
): Promise<AxiosResponse<Provider>> => await axios.put(`/products/${id}`, newProduct);

export const deleteProduct = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/products/${id}`);*/