interface ProductFeaturesProps {
  features: string;
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="flex flex-col gap-4 font-manrope max-w-[635px]">
      <h2 className="md:text-3xl text-2xl font-bold uppercase leading-normal tracking-[-1px]">
        Features
      </h2>
      <p className="text-[15px] font-medium leading-normal opacity-50">
        {features}
      </p>
    </div>
  );
}
