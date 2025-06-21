import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl py-12 mx-auto my-8 px-4 md:px-6 lg:px-0 font-manrope">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg relative min-h-[300px] lg:h-[588px] order-1 lg:order-2">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="About"
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 588px"
            fill
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center gap-4 lg:max-w-[445px] w-full px-4 md:px-6 lg:px-0">
          <h2 className="text-black text-[28px] lg:text-[40px] font-bold uppercase leading-[28px] lg:leading-[44px]">
            Bringing you the <br /> <span className="text-[#D87D4A]">best</span>{" "}
            audio gear
          </h2>
          <p className="text-black text-center lg:text-left text-[15px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
