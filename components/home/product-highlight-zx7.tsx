import { Button } from "@/components/ui/button";

export default function ProductHighlight() {
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="bg-[#F1F1F1] h-[320px] max-w-7xl mx-auto my-8 font-manrope">
        <div className="bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] h-full bg-center bg-cover bg-no-repeat rounded-lg">
          <div className="flex flex-col items-start gap-8 px-4 md:px-12 lg:px-16 py-[100px]">
            <h2 className="text-black text-[28px] font-bold uppercase leading-[28px]">
              ZX7 <br className="hidden md:block" /> SPEAKER
            </h2>
            <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white cursor-pointer">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
