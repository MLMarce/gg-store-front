import {
  Category,
  CreatedProduct,
  CreateProduct,
  Product,
} from "@/types/product";
import { API_URL } from "@/utils/config";
import axios from "axios";

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(`${API_URL}/categories`);
    return response.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};

export const createCategory = async (
  name: string
): Promise<Category | void> => {
  try {
    const response = await axios.post<Category>(`${API_URL}/categories`, {
      headers: {
        Authorization: `Bearer token`,
      },
      body: {
        name,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Error creating category:", err);
  }
};

export const getCategoryById = async (id: string): Promise<Category | void> => {
  try {
    const response = await axios.get<Category>(`${API_URL}/categories/${id}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching category by id:", err);
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${API_URL}/product`);
    return response.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export const getProductById = async (
  id: string
): Promise<CreatedProduct | void> => {
  try {
    const response = await axios.get<CreatedProduct>(
      `${API_URL}/product/${id}`
    );
    return response.data;
  } catch (err) {
    console.error("Error al obtener el producto:", err);
  }
};

export const createProduct = async (
  product: CreateProduct
): Promise<CreatedProduct> => {
  try {
    const response = await axios.post<CreatedProduct>(
      `${API_URL}/product`,
      product
    );
    return response.data;
  } catch (err) {
    console.error("Error al crear el producto:", err);
    throw new Error("Error al crear el producto");
  }
};
