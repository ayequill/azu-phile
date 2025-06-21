import { StrapiProduct } from "@/types/product";
import Image from "next/image";
import { Button } from "../ui/button";

interface SuggestedProductCardProps {
  product: StrapiProduct;
}

export default function SuggestedProductCard({
  product,
}: SuggestedProductCardProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center lg:max-w-[350px] md:max-w-[245px]">
        <Image
          src={product.image.url}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <p className="text-center text-2xl font-bold">{product.name}</p>
        <Button className="w-fit cursor-pointer uppercase">See Product</Button>
      </div>
    </div>
  );
}
