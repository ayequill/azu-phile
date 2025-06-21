import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const ProductListingCardSkeleton = ({
  reverse = false,
}: {
  reverse?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between font-manrope">
      <div
        className={cn(
          "max-w-[330px] max-h-[350px] md:max-w-[689px] lg:max-w-[540px] md:max-h-[350px] lg:max-h-[560px] mx-auto w-full bg-[#F1F1F1] p-6 flex items-center justify-center",
          reverse && "lg:order-2"
        )}
      >
        <Skeleton className="max-w-[220px] lg:max-w-[350px] w-full h-[220px] lg:h-[350px] bg-gray-200" />
      </div>
      <div
        className={cn(
          "flex flex-col gap-4 mx-auto max-w-[445px] justify-center",
          reverse && "lg:order-1"
        )}
      >
        <div className="flex flex-col gap-2">
          {Math.random() > 0.5 && (
            <Skeleton className="h-4 w-32 mx-auto lg:mx-0 bg-gray-200" />
          )}
          <Skeleton className="h-8 w-full max-w-[300px] mx-auto lg:mx-0 bg-gray-200" />
          <Skeleton className="h-8 w-3/4 max-w-[250px] mx-auto lg:mx-0 bg-gray-200" />
        </div>
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-3/4 bg-gray-200" />
          </div>
          <Skeleton className="h-10 w-32 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

const PageBannerSkeleton = () => {
  return (
    <div className="bg-black text-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <Skeleton className="h-10 w-48 mx-auto bg-gray-700" />
      </div>
    </div>
  );
};

const CategoriesSectionSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="text-center group cursor-pointer">
            <div className="bg-[#F1F1F1] rounded-lg p-8 mb-4 relative overflow-hidden">
              <Skeleton className="w-32 h-32 mx-auto bg-gray-300" />
            </div>
            <Skeleton className="h-6 w-24 mx-auto mb-4 bg-gray-300" />
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="h-4 w-12 bg-gray-300" />
              <Skeleton className="h-4 w-4 bg-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <Skeleton className="h-10 w-3/4 bg-gray-300" />
          <Skeleton className="h-10 w-1/2 bg-gray-300" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-300" />
            <Skeleton className="h-4 w-full bg-gray-300" />
            <Skeleton className="h-4 w-3/4 bg-gray-300" />
          </div>
        </div>
        <div className="lg:order-first">
          <Skeleton className="w-full h-[300px] lg:h-[400px] rounded-lg bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

interface ProductCategorySkeletonProps {
  productCount?: number;
}

export default function ProductCategorySkeleton({
  productCount = 3,
}: ProductCategorySkeletonProps) {
  return (
    <div>
      <PageBannerSkeleton />

      <div className="max-w-7xl mx-auto py-8 px-4 md:py-12 flex flex-col gap-8">
        {Array.from({ length: productCount }, (_, index) => (
          <ProductListingCardSkeleton key={index} reverse={index % 2 === 1} />
        ))}
      </div>

      <CategoriesSectionSkeleton />

      <AboutSkeleton />
    </div>
  );
}
