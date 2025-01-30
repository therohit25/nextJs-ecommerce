import { filteredProducts } from '@/api/product';
import ProductListView from '@/pages/products-list';
import { Product } from '@/response-types/product';

export default async function Page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const searchTerm = searchParams?.title || '';
  const priceRange = searchParams?.priceRange || '';
  const category = searchParams?.categoryId || '';
  const products: Product[] = await filteredProducts({ searchTerm, category, priceRange});

  return <ProductListView products={products} />;
}
