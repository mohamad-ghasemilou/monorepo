export type ProductId = string | undefined;

export interface Product {
  id: ProductId;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export type CreateProduct = Omit<Product, "id" | "category"> & { categoryId: number }
