"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon } from "lucide-react";
import { useCartContext } from "@/contexts/cart-context";
import { useState } from "react";

interface ProductCartDetailsProps {
  id: string;
  title: string;
  shortName: string;
  description: string;
  image: string;
  cartImage: string;
  isNew: boolean;
  price: number;
  slug?: string;
}

const ProductCartDetails = ({
  id,
  title,
  shortName,
  description,
  image,
  cartImage,
  isNew,
  price,
  slug,
}: ProductCartDetailsProps) => {
  const { addItem, getItemQuantity } = useCartContext();
  const [localQuantity, setLocalQuantity] = useState(1);
  const currentCartQuantity = getItemQuantity(id);
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 justify-between font-manrope py-6 px-4 lg:px-0">
      <div
        className={cn(
          "max-h-[350px] md:max-w-[689px] lg:max-w-[540px] md:h-[480px] md:max-h-[480px] lg:max-h-[560px] w-full bg-[#F1F1F1] p-6 flex items-center justify-center"
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
      <div className="flex flex-col gap-4 mx-auto max-w-[445px] justify-center">
        <div className="flex flex-col gap-2">
          {isNew && (
            <span className="text-[#D87D4A] text-sm font-bold uppercase leading-normal tracking-[10px]">
              New Product
            </span>
          )}
          <p className="text-[28px] font-bold uppercase leading-normal tracking-[-1px] line-clamp-2">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-start gap-8">
          <p className="text-[15px] font-medium leading-normal opacity-50">
            {description}
          </p>
          <p className="text-[15px] font-bold leading-normal">
            $ {price.toLocaleString("en-US", { minimumFractionDigits: 0 })}
          </p>
          <div className="flex gap-4 items-center justify-between">
            <div className="flex items-center gap-4 bg-[#F1F1F1]">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent cursor-pointer"
                onClick={() => setLocalQuantity(Math.max(1, localQuantity - 1))}
              >
                <MinusIcon className="text-black opacity-25 hover:text-black" />
              </Button>
              <p>{localQuantity}</p>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent cursor-pointer"
                onClick={() => setLocalQuantity(localQuantity + 1)}
              >
                <PlusIcon className="text-black opacity-25 hover:text-black" />
              </Button>
            </div>
            <Button
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white cursor-pointer"
              onClick={() => {
                addItem({
                  id,
                  name: title,
                  shortName,
                  price,
                  image: cartImage,
                  slug,
                  quantity: localQuantity,
                });
                setLocalQuantity(1);
              }}
            >
              Add to Cart{" "}
              {currentCartQuantity > 0 && `(${currentCartQuantity} in cart)`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartDetails;
