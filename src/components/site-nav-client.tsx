"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  initialLocale: "en" | "zh";
};

export default function SiteNavClient({ initialLocale }: Props) {
  const t = useTranslations("nav");
  const router = useRouter();
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
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 rounded-full border border-white/40 shadow-2xl ${
        scrolled
          ? "glass bg-white/25 backdrop-blur-2xl py-0"
          : "glass bg-white/20 backdrop-blur-xl py-0"
      }`}
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-[32px] font-extrabold tracking-tight text-white drop-shadow-md hover:opacity-80 transition-all duration-300"
          >
            Blotz
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-8">
            {/* Nav links */}
            <div className="hidden sm:flex items-center gap-8">
              <Link
                href="/features"
                className="group relative text-[18px] font-extrabold tracking-tight text-white drop-shadow-md transition-all"
              >
                {t("links.features")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/feedback"
                className="group relative text-[18px] font-extrabold tracking-tight text-white drop-shadow-md transition-all"
              >
                {t("links.feedback")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-2 px-4 py-2 text-[12px] font-extrabold uppercase tracking-widest text-white bg-white/25 hover:bg-white/40 rounded-full border border-white/20 backdrop-blur-md transition-all active:scale-95 hover:border-white/50 shadow-md"
              title={t("language.label")}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "EN" : "中文"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
