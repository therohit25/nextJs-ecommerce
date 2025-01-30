import { getProductById } from '@/api/product';
import ProductPageView from '@/pages/product-page';

const Page = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductById(Number(params.productId));

  return <ProductPageView product={product} />;
};

export default Page;
