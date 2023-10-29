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
  category: string[];
  imageUrl: string[];
  price: number;
}
