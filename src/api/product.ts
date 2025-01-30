import { createURL } from '@/helpers/createURL';

export const getAllProducts = async () => {
  const products = await fetch('https://api.escuelajs.co/api/v1/products');
  const productData = await products.json();

  return productData;
};
export const getProductById = async (id: number) => {
  const products = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  const productData = await products.json();

  return productData;
};
export const filteredProducts = async ({
  searchTerm,
  category,
  priceRange,
}: {
  searchTerm: string;
  category: string;
  priceRange: string;
}) => {
  const url = createURL({searchTerm, category, priceRange });
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
export const getCategories = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  const data = await res.json();
  return data;
};
