export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="bg-black font-manrope">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-white text-[28px] md:text-[40px] font-bold uppercase text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
