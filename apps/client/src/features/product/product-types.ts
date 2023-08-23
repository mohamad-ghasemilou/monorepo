export type ProductId = number;

export interface Product {
  id: ProductId;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

type CreateProductBase = Omit<Product, "id" | "category">
export interface CreateProduct extends CreateProductBase {
  categoryId: number;
}
