//category 
export interface Category {
  id: string;
  name: string;
}
export interface CategoryByID {
  id:       string;
  name:     string;
  products: ProductInCategory[];
}

export interface ProductInCategory {
  id:           string;
  name:         string;
  description:  string;
  price:        string;
  images:       string[];
  productSizes: ProductSize[];
}

export interface ProductSize {
  id:            string;
  stock:         number;
  reservedStock: number;
}

//product
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
