import Image from "next/image";
import { navigationLinks } from "@/lib/nav-links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/common/icons/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#101010] font-manrope pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:items-stretch gap-8 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:pb-16">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile"
            width={143}
            height={25}
            className=" border-t-[4px] border-[#D87D4A] pt-8 lg:pt-16"
          />
          <div className="flex flex-col md:flex-row gap-4 pt-8 lg:pt-16">
            {navigationLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-white text-center md:text-left text-[15px] uppercase font-bold hover:text-orange-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
          <p className="text-white text-center md:text-left text-[15px] max-w-[328px] md:max-w-[600px] opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <FooterSocialLinks className="flex md:hidden lg:flex" />
        </div>
        <div className="flex justify-center items-center md:justify-between lg:items-end gap-8">
          <p className="text-white text-[15px] leading-[25px] md:text-left text-center opacity-50">
            Copyright {currentYear}. All Rights Reserved
          </p>
          <FooterSocialLinks className="md:flex hidden lg:hidden" />
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/audiophile",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/audiophile",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/audiophile",
    icon: InstagramIcon,
  },
];

const FooterSocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-4 justify-center", className)}>
      {socialLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          <link.icon />
        </Link>
      ))}
    </div>
  );
};
