"use client";

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-sm leading-normal tracking-[-0.11px] text-black hover:text-[#FBAF85] transition-all duration-300 cursor-pointer"
    >
      Go Back
    </button>
  );
}
