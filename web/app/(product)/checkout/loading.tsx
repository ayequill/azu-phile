import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 pt-16 pb-24 max-w-6xl">
        <Skeleton className="h-6 w-20 mb-8 bg-gray-300" />

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 md:p-8">
              <Skeleton className="h-8 w-32 mb-8 bg-gray-300" />

              <div className="mb-8">
                <Skeleton className="h-4 w-28 mb-4 bg-orange-200" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Skeleton className="h-4 w-16 mb-2 bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-20 mb-2 bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-24 mb-2 bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <Skeleton className="h-4 w-24 mb-4 bg-orange-200" />
                <div className="space-y-6">
                  <div>
                    <Skeleton className="h-4 w-20 mb-2 bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Skeleton className="h-4 w-16 mb-2 bg-gray-300" />
                      <Skeleton className="h-12 w-full bg-gray-300" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-12 mb-2 bg-gray-300" />
                      <Skeleton className="h-12 w-full bg-gray-300" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-4 w-16 mb-2 bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                </div>
              </div>

              <div>
                <Skeleton className="h-4 w-28 mb-4 bg-orange-200" />
                <div className="grid md:grid-cols-2 gap-6">
                  <Skeleton className="h-4 w-24 bg-gray-300" />
                  <div className="space-y-3">
                    <Skeleton className="h-12 w-full bg-gray-300" />
                    <Skeleton className="h-12 w-full bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 md:p-8 sticky top-8">
              <Skeleton className="h-6 w-20 mb-6 bg-gray-300" />

              <div className="space-y-6 mb-6">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16 bg-gray-300" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-20 mb-2 bg-gray-300" />
                      <Skeleton className="h-4 w-16 bg-gray-300" />
                    </div>
                    <Skeleton className="h-4 w-8 bg-gray-300" />
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex justify-between">
                    <Skeleton className="h-4 w-16 bg-gray-300" />
                    <Skeleton className="h-4 w-20 bg-gray-300" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-12 w-full bg-orange-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
