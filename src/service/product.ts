import {
  Category,
  CategoryByID,
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
    console.error("Error al obtener las categorías:", err);
    return [];
  }
};

export const createCategory = async (
  name: string,
  token: string
): Promise<Category | void> => {
  try {
    const response = await axios.post<Category>(
      `${API_URL}/categories`,
      { name }, // El cuerpo del request
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error creating category:", err);
  }
};

export const getCategoryById = async (id: string): Promise<CategoryByID | null> => {
  try {
    const response = await axios.get<CategoryByID>(`${API_URL}/categories/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching category by id:", err);
    return null;
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
): Promise<CreatedProduct | null> => {
  try {
    const response = await axios.get<CreatedProduct>(
      `${API_URL}/product/${id}`
    );
    return response.data;
  } catch (err) {
    console.error("Error al obtener el producto:", err);
    return null;
  }
};

export const createProduct = async (
  product: CreateProduct,
  token: string
): Promise<CreatedProduct> => {
  try {
    const response = await axios.post<CreatedProduct>(
      `${API_URL}/product`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error al crear el producto:", err);
    throw new Error("Error al crear el producto");
  }
};
