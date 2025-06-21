import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/contexts/use-toggle-cart";
import { CartProvider as CartContextProvider } from "@/contexts/cart-context";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Audiophile",
    default: "Audiophile",
  },
  description:
    "Discover premium audio equipment including headphones, speakers, and earphones",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased scroll-smooth`}>
        <CartContextProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
