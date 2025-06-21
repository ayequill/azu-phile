import { Button } from "../ui/button";

export default function ProductHighlight() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-8 px-4 md:px-6 lg:px-0">
      <div className="bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] w-full min-h-[200px] md:min-h-[320px] bg-center bg-cover bg-no-repeat rounded-lg"></div>
      <div className="bg-gray-100 min-h-[200px] md:min-h-[320px] flex flex-col items-start gap-8 px-4 md:px-12 lg:px-16 justify-center rounded-lg">
        <h2 className="text-black text-[28px] font-bold uppercase leading-[28px]">
          YX1 EARPHONES
        </h2>
        <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white cursor-pointer">
          See Product
        </Button>
      </div>
    </section>
  );
}
