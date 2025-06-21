import { getProductBySlug } from "@/actions/products";
import GoBack from "@/components/common/go-back";
import ProductDetailsPage from "@/components/products/product-details-page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ d: string }>;
}) {
  const { d } = await searchParams;
  const product = await getProductBySlug(d);
  return {
    title: product.data.name,
    description: product.data.description,
    openGraph: {
      title: product.data.name,
      description: product.data.description,
      images: [product.data.image.url],
    },
  };
}

export default async function EarphonesPage({
  searchParams,
}: {
  searchParams: Promise<{ d: string }>;
}) {
  const { d } = await searchParams;
  const product = await getProductBySlug(d);

  return (
    <main className="max-w-7xl mx-auto py-8 md:py-12">
      <GoBack />
      <ProductDetailsPage product={product.data} /> 
    </main>
  );
}
