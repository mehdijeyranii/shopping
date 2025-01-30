export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  size: "L" | "M" | "S" | "XL" | "XXL";
  color: string;
  inStock: boolean;
  image: string;
  quantity: number;
}
