import { cn } from "@/lib/utils";
import { GalleryItem } from "@/types/product";
import Image from "next/image";

interface GalleryProps {
  gallery: GalleryItem[];
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 px-4 lg:px-0">
      {gallery && (
        <div className={cn("col-span-1 flex flex-col gap-4")}>
          {gallery.slice(0, 2).map((item) => (
            <div key={item.id} className={cn("col-span-1")}>
              <Image
                key={item.id}
                src={item.image.url}
                alt={item.image.alternativeText || ""}
                width={445}
                height={330}
                className="rounded-lg h-auto object-cover aspect-square md:aspect-3/2"
              />
            </div>
          ))}
        </div>
      )}
      {gallery &&
        gallery.slice(2).map((item) => (
          <div key={item.id} className={cn("col-span-2 w-full mt-4 md:mt-0")}>
            <Image
              key={item.id}
              src={item.image.url}
              alt={item.image.alternativeText || ""}
              width={900}
              height={635}
              className="rounded-lg h-full object-cover md:aspect-3/2"
            />
          </div>
        ))}
    </div>
  );
}
