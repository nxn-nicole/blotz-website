"use client";

import { Globe, Menu, X } from "lucide-react";
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
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine if we've scrolled past the hero section (which is min-h-screen)
      setIsPastHero(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleLocale = () => {
    const nextLocale = language === "en" ? "zh" : "en";
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    setLanguage(nextLocale);
    router.refresh();
  };

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-zinc-200/50 shadow-premium will-change-[top,width,max-width,border-radius] ${
          isPastHero
            ? "top-0 w-full max-w-full rounded-[0rem] bg-white/95 backdrop-blur-2xl py-0"
            : "top-6 w-[95%] max-w-5xl rounded-[2rem] bg-white/90 backdrop-blur-xl py-0"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
                      const element = document.getElementById("features");
                      if (element) {
                        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 52;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }
                  }}
                  className={`px-2 py-1 transition-all duration-300 hover:text-secondary hover:scale-105 active:scale-95 ${
                    language === "zh"
                      ? "text-base font-bold tracking-normal chinese-text"
                      : "font-sans text-sm uppercase font-bold tracking-tight"
                  } text-zinc-800 bg-none border-none cursor-pointer`}
                >
                  {t("links.features")}
                </Link>
                <Link
                  href="/#feedback"
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("feedback");
                      if (element) {
                        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 52;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }
                  }}
                  className={`px-2 py-1 transition-all duration-300 hover:text-secondary hover:scale-105 active:scale-95 ${
                    language === "zh"
                      ? "text-base font-bold tracking-normal chinese-text"
                      : "font-sans text-sm uppercase font-bold tracking-tight"
                  } text-zinc-800 bg-none border-none cursor-pointer`}
                >
                  {t("links.feedback")}
                </Link>
                <Link
                  href="/#footer"
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const element = document.getElementById("footer");
                      if (element) {
                        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 52;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }
                  }}
                  className={`px-2 py-1 transition-all duration-300 hover:text-secondary hover:scale-105 active:scale-95 ${
                    language === "zh"
                      ? "text-base font-bold tracking-normal chinese-text"
                      : "font-sans text-sm uppercase font-bold tracking-tight"
                  } text-zinc-800 bg-none border-none cursor-pointer`}
                >
                  {t("links.social")}
                </Link>
              </div>

              {/* Language toggle */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 font-sans text-xs font-black uppercase tracking-widest text-white bg-gradient-primary-horizontal hover:scale-105 rounded-full transition-all duration-300 active:scale-95 border-0 shadow-gradient"
                  title={t("language.label")}
                >
                  <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                  <span className={language === "zh" ? "text-sm tracking-normal font-bold chinese-text" : ""}>
                    {language === "en" ? "EN" : "中文"}
                  </span>
                </button>

                {/* Mobile Hamburger Menu Button */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex sm:hidden items-center justify-center p-2 text-zinc-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className={`h-6 w-6 transition-all ${isPastHero ? "text-primary" : "text-zinc-800"}`} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity duration-500 sm:hidden z-40 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Dropdown - Card Style */}
      <div
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) sm:hidden overflow-hidden border border-zinc-200/50 shadow-premium will-change-[top,width,border-radius] ${
          isPastHero
            ? "top-[52px] w-full rounded-[0rem]"
            : "top-[calc(1.5rem+52px+8px)] w-[95%] max-w-5xl rounded-[2rem]"
        } ${
          isMenuOpen 
            ? "max-h-[400px] opacity-100" 
            : "max-h-0 opacity-0 pointer-events-none"
        } ${
          isPastHero ? "bg-white/95 backdrop-blur-2xl" : "bg-white/90 backdrop-blur-xl"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {[
            { href: "/", label: language === "zh" ? "首页" : "Home", id: "top" },
            { href: "/#features", label: t("links.features"), id: "features" },
            { href: "/#feedback", label: t("links.feedback"), id: "feedback" },
            { href: "/#socialmedia", label: t("links.social"), id: "socialmedia" },
          ].map((link, index) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => {
                setIsMenuOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                    if (link.id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
                    else {
                      const element = document.getElementById(link.id);
                      if (element) {
                        // Use the sticky nav height (52px) for all section jumps to ensure perfect alignment
                        // regardless of the starting position.
                        const navHeight = 52;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    }
                }
              }}
              className="group flex items-center px-4 py-3 rounded-2xl hover:bg-zinc-50 transition-colors"
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: "all 0.4s ease-out",
              }}
            >
              <span
                className={`text-xl font-bold font-sans ${
                  language === "zh" ? "chinese-text tracking-normal" : "uppercase tracking-tight"
                } text-zinc-800 group-hover:text-primary transition-colors`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
