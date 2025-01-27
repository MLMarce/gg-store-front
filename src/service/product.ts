import { Categories } from "@/types/product";
import { API_URL } from "@/utils/config";
import axios from "axios";

export const getAllCategories = async (): Promise<Categories[]> => {
  try {
    const response = await axios.get<Categories[]>(`${API_URL}/categories`);
    return response.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return []; 
  }
};
