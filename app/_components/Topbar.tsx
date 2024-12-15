"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

import LOGO from "@/public/images/logo.png";

const LINKS = [
  { label: "خانه", href: "/" },
  { label: "درباره‌ما", href: "/about" },
  { label: "تماس", href: "/contact" },
  { label: "وبلاگ", href: "/blogs" },
  { label: "نمونه‌کار", href: "/portfolio" },
];

const Topbar = () => {
  const pathname = usePathname();
  const [isShowingSidebar, setIsShowingSidebar] = useState(false);

  return (
    <>
      <header className="min-h-[100px] flex items-center justify-between text-base font-medium lg-mb-0">
        <Image
          src={LOGO}
          width={100}
          alt="logo"
          quality={100}
          className="object-contain cursor-pointer grayscale"
          style={{filter:""}}
          placeholder="blur"
        />

        {/* Desktop Links */}
        <div className="gap-5 items-center hidden lg:flex">
          {LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${pathname === link.href ? "text-greenApp" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="bg-greenApp text-white lg:px-4 lg:py-2 rounded-full px-4 py-1 hidden lg:block">
          <Link href={"/contact"} className="flex items-center gap-2">
            <LogOut size={20} className="" />
            خروج
          </Link>
        </button>

        {/* Hamburger Icon */}
        <Image
          src="/icons/icon-hamburger.svg"
          alt="icon-hamburger"
          width={24}
          height={24}
          className="lg:hidden cursor-pointer"
          onClick={() => setIsShowingSidebar(!isShowingSidebar)}
        />
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 bg-opacity-90 ${
          isShowingSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsShowingSidebar(false)}
        >
          <Image
            src="/icons/icon-close.svg"
            alt="icon-close"
            width={24}
            height={24}
          />
        </button>

        <div className="flex flex-col items-center gap-5 mt-10">
          {LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                pathname === link.href ? "text-greenApp" : "text-black"
              } text-lg`}
              onClick={() => setIsShowingSidebar(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-greenApp text-white px-8 py-2 rounded-full">
            خروج
          </button>
        </div>
      </aside>
    </>
  );
};

export default Topbar;
