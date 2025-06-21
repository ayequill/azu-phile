import { Button } from "@/components/ui/button";

export default function ProductHighlight() {
  return (
    <section className="lg:py- px-4 md:px-6 lg:px-8">
      <div className="bg-[#D87D4A] max-w-7xl mx-auto my-2 rounded-lg font-manrope">
        <div className="lg:px-8 min-h-[700px] md:min-h-[700px] lg:min-h-[560px] bg-[url('/assets/home/desktop/pattern-circles.svg')] lg:bg-size-[944px_944px] bg-size-[500px_500px] lg:bg-position-[top_20%_left_-40%] bg-position-[top_-70%_center] bg-no-repeat grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[url('/assets/home/desktop/image-speaker-zx9.png')] bg-size-[auto_200px] lg:bg-size-[auto_410px] bg-position-[bottom_-10%_center] bg-no-repeat" />
          <div className="mx-auto flex items-center justify-center">
            <div className="flex flex-start items-center lg:items-start justify-center max-w-[300px] flex-col gap-8">
              <h2 className="text-white text-[56px] text-center lg:text-left font-bold uppercase leading-[56px]">
                ZX9 <br /> SPEAKER
              </h2>
              <p className="text-white text-sm text-center lg:text-left font-medium">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button className="bg-black text-white hover:bg-[#4C4C4C] cursor-pointer">
                See Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
