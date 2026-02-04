"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  initialLocale: "en" | "zh";
};

export default function SiteNavClient({ initialLocale }: Props) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<"en" | "zh">(initialLocale);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = language === "en" ? "zh" : "en";
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    setLanguage(nextLocale);
    router.refresh();
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 rounded-full border border-zinc-200/50 shadow-premium ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl py-0"
          : "bg-white/90 backdrop-blur-xl py-0"
      }`}
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-[52px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-black tracking-tight text-gradient-primary hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <Image src="/bun-icon.png" alt="Blotz" width={28} height={28} className="h-7 w-7" />
            Blotz
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Nav links */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/#features"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-2 py-1 transition-all duration-300 hover:text-secondary hover:scale-105 active:scale-95 ${
                  language === "zh"
                    ? "text-base font-bold tracking-normal chinese-text"
                    : "font-mono text-sm uppercase font-bold tracking-tight"
                } text-zinc-800 bg-none border-none cursor-pointer`}
              >
                {t("links.features")}
              </Link>
              <Link
                href="/#feedback"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-2 py-1 transition-all duration-300 hover:text-secondary hover:scale-105 active:scale-95 ${
                  language === "zh"
                    ? "text-base font-bold tracking-normal chinese-text"
                    : "font-mono text-sm uppercase font-bold tracking-tight"
                } text-zinc-800 bg-none border-none cursor-pointer`}
              >
                {t("links.feedback")}
              </Link>
            </div>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 font-mono text-xs font-black uppercase tracking-widest text-white bg-gradient-primary-horizontal hover:scale-105 rounded-full transition-all duration-300 active:scale-95 border-0 shadow-gradient"
              title={t("language.label")}
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
              <span className={language === "zh" ? "text-sm tracking-normal font-bold chinese-text" : ""}>
                {language === "en" ? "EN" : "中文"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
