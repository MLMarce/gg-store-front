export interface Category {
  id: string;
  name: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
}

export interface CreateProduct {
  name: string;
  price: number;
  description: string;
  images: string[];
  categoryName: string;
  sizesAndQuantities: SizesAndQuantity[];
}

export interface SizesAndQuantity {
  size: string;
  quantity: number;
}
export interface CreatedProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  productSizes: ProductSize[];
  category: Category;
}

export interface Size {
  id: string;
  name: string;
}

export interface ProductSize {
  id: string;
  stock: number;
  reservedStock: number;
  size: Size;
}
