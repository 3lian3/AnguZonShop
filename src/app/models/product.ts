import { Category } from "./category";

export interface Product {
  id?: string;
  slug?: string;
  name: string;
  description: string;
  composition?: string;
  manufacturing?: string;
  descriptions?: string;
  color?: string[];
  size: string[];
  stock?: number;
  categories: Category[];
  imageUrl: string[];
  price: number;
}
