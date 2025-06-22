import { Skeleton } from "@/components/ui/skeleton";

const ProductCartDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 px-4 lg:px-0">
      <div className="w-full">
        <Skeleton className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-300 rounded-lg" />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <Skeleton className="h-4 w-32 bg-orange-200" />

        <div className="space-y-2">
          <Skeleton className="h-8 w-full bg-gray-300" />
          <Skeleton className="h-8 w-3/4 bg-gray-300" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-2/3 bg-gray-300" />
        </div>

        <Skeleton className="h-6 w-24 bg-gray-300" />

        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-32 bg-gray-300" />
          <Skeleton className="h-12 w-40 bg-orange-200" />
        </div>
      </div>
    </div>
  );
};

const ProductFeaturesSkeleton = () => {
  return (
    <div className="flex-1">
      <Skeleton className="h-8 w-24 mb-6 bg-gray-300" />
      <div className="space-y-4">
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} className="h-4 w-full bg-gray-300" />
        ))}
        <Skeleton className="h-4 w-3/4 bg-gray-300" />
      </div>
    </div>
  );
};

const InTheBoxSkeleton = () => {
  return (
    <div className="flex-1">
      <Skeleton className="h-8 w-32 mb-6 bg-gray-300" />
      <div className="space-y-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-4 w-8 bg-orange-200" />
            <Skeleton className="h-4 flex-1 bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

const GallerySkeleton = () => {
  return (
    <div className="py-12 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          <Skeleton className="w-full h-[200px] lg:h-[280px] bg-gray-300 rounded-lg" />
          <Skeleton className="w-full h-[200px] lg:h-[280px] bg-gray-300 rounded-lg" />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <Skeleton className="w-full h-[400px] lg:h-[576px] bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const SuggestedProductCardSkeleton = () => {
  return (
    <div className="flex-1 text-center">
      <Skeleton className="w-full h-[200px] lg:h-[300px] bg-gray-300 rounded-lg mb-6" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-4 bg-gray-300" />
      <Skeleton className="h-10 w-32 mx-auto bg-orange-200" />
    </div>
  );
};

const SuggestedProductsSkeleton = () => {
  return (
    <div className="py-12 px-4 lg:px-0">
      <Skeleton className="h-8 w-48 mx-auto mb-8 bg-gray-300" />
      <div className="flex flex-col md:flex-row lg:gap-20 gap-8">
        {Array.from({ length: 3 }, (_, i) => (
          <SuggestedProductCardSkeleton key={i} />
        ))}
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

export default function ProductDetailsSkeleton() {
  return (
    <main className="max-w-7xl mx-auto py-8 md:py-12">
      <div className="px-4 lg:px-0 mb-8">
        <Skeleton className="h-6 w-20 bg-gray-300" />
      </div>

      <div>
        <ProductCartDetailsSkeleton />

        <div className="flex flex-col lg:flex-row lg:gap-20 gap-8 py-12 px-4 lg:px-0">
          <ProductFeaturesSkeleton />
          <InTheBoxSkeleton />
        </div>

        <GallerySkeleton />

        <SuggestedProductsSkeleton />

        <CategoriesSectionSkeleton />

        <AboutSkeleton />
      </div>
    </main>
  );
}
