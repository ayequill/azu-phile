import { IncludeItem } from "@/types/product";

interface InTheBoxProps {
  includes: IncludeItem[];
}

export default function InTheBox({ includes }: InTheBoxProps) {
  return (
    <div className="flex flex-col gap-4 font-manrope">
      <h2 className="md:text-3xl text-2xl font-bold uppercase leading-normal tracking-[-1px]">
        In the Box
      </h2>
      <div className="flex flex-col gap-4">
        {includes.map((include) => (
          <div key={include.id} className="flex items-center gap-4">
            <p className="text-[15px] font-bold leading-normal text-[#D87D4A]">
              {include.quantity}x
            </p>
            <p className="text-[15px] font-medium leading-normal opacity-50">
              {include.item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
