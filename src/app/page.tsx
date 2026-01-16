import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SiteNav from "../components/site-nav";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-950">
      <SiteNav />

      {/* Hero Section */}
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-10 lg:min-h-screen lg:flex-row lg:justify-between lg:gap-16 lg:px-20">
        <div className="flex w-full flex-1 flex-col items-center text-center sm:space-y-6 lg:-mt-36 lg:items-start lg:text-left">
          {/* Main Heading */}
          <div className="sm:space-y-3">
            <h1 className="pt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              {t("titleLine1")}
            </h1>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#9AD513] sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#9AD513]">
              {t("titleLine2")}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-base leading-relaxed text-gray-600 dark:text-zinc-300 sm:text-lg md:text-xl">
              {t("subtitleLine1")}
            </p>
            <p className="text-base leading-relaxed text-gray-600 dark:text-zinc-300 sm:text-lg md:text-xl">
              {t("subtitleLine2")}
            </p>
            <p className="mt-2 text-base font-medium text-[#9AD513] sm:mt-4 sm:text-lg md:text-xl dark:text-[#9AD513]">
              {t("ctaLine")}
            </p>
            <p className="text-xs text-gray-500 sm:text-sm dark:text-zinc-500">
              {t("noteLine")}
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:items-start sm:gap-4">
            {/* iOS Download Button */}
            <a
              href="https://testflight.apple.com/join/juXbBxHN"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#9AD513] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:border-2 hover:border-[#9AD513] hover:bg-transparent hover:text-[#9AD513] sm:w-[200px]"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>{t("iosLabel")}</span>
            </a>

            {/* Android Download Button */}
            <a
              href="https://www.pgyer.com/blotztask"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#9AD513] bg-white px-8 py-4 text-lg font-semibold text-[#9AD513] transition-all hover:scale-105 hover:bg-gray-50 dark:border-[#9AD513] dark:bg-zinc-900 dark:text-[#9AD513] dark:hover:bg-zinc-800 sm:w-[200px]"
            >
              <Image
                src="/android-icon.png"
                alt="Android"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>{t("androidLabel")}</span>
            </a>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <Image
            src="/blotz-calendar-page.png"
            alt={t("imageAlt")}
            width={1040}
            height={1080}
            className="h-auto w-full max-w-md rounded-3xl object-contain sm:max-w-lg lg:max-w-none"
            priority
          />
        </div>
      </div>
    </div>
  );
}
