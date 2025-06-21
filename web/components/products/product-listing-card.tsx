import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductListingCardProps {
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  reverse?: boolean;
  href: string;
}

const ProductListingCard = ({
  title,
  description,
  image,
  isNew,
  reverse,
  href,
}: ProductListingCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between font-manrope">
      <div
        className={cn(
          "max-w-[330px] max-h-[350px] md:max-w-[689px] lg:max-w-[540px] md:max-h-[350px] lg:max-h-[560px] mx-auto w-full bg-[#F1F1F1] p-6 flex items-center justify-center",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={image}
          alt="Headphone 1"
          width={500}
          height={500}
          className="max-w-[220px] lg:max-w-[350px] object-cover"
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-4 mx-auto max-w-[445px] justify-center",
          reverse && "lg:order-1"
        )}
      >
        <div className="flex flex-col gap-2">
          {isNew && (
            <span className="text-[#D87D4A] text-sm font-bold uppercase leading-normal tracking-[10px] text-center lg:text-left">
              New Product
            </span>
          )}
          <p className="text-[28px] font-bold uppercase leading-normal tracking-[-1px] line-clamp-2 text-center lg:text-left">
            {title}
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <p className="text-[15px] font-medium leading-normal opacity-50 text-center lg:text-left">
            {description}
          </p>
          <Link
            href={href}
            className="w-fit bg-[#D87D4A] hover:bg-[#FBAF85] transition-all duration-300 text-white px-8 py-2 text-sm font-bold uppercase leading-normal tracking-[-0.11px]"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;
