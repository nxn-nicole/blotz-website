"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SiteNav from "../../components/site-nav";

export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("feature");
  const sectionMeta = [
    { key: "calendar", video: "/videos/calendar-page-video.mp4" },
    { key: "breakdown", video: "/videos/break-down-video.mp4" },
    { key: "starSpark", video: "/videos/star-spark-video.mp4" },
  ] as const;

  const sections = sectionMeta.map((section) => ({
    key: section.key,
    title: t(`sections.${section.key}.title`),
    description: t(`sections.${section.key}.description`),
    bullets: t.raw(`sections.${section.key}.bullets`) as string[],
    video: section.video,
    accent: "#9AD513",
  }));

  const activeSection = sections[activeIndex];

  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-950">
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl px-6">
        <section className="relative overflow-hidden rounded-[32px] bg-white/70 px-8 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:my-16 dark:border dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div
            key={activeIndex}
            className="feature-slide flex min-h-[420px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16"
          >
            <div className="max-w-xl text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-zinc-400"
                style={{ borderColor: activeSection.accent }}
              >
                {t("badge", { index: activeIndex + 1 })}
              </div>
              <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                {activeSection.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-zinc-300">
                {activeSection.description}
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-600 sm:text-base dark:text-zinc-300">
                {activeSection.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 rounded-full"
                      style={{ backgroundColor: activeSection.accent }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full justify-center lg:justify-end">
              <div className="w-[240px] overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-zinc-950 dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
                <video
                  className="h-auto w-full"
                  src={activeSection.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % sections.length)
            }
            className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#9AD513] bg-white text-[#9AD513] shadow-md transition hover:scale-105 dark:bg-zinc-900 dark:shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
            aria-label={t("nextAriaLabel")}
          >
            ↓
          </button>
        </section>
      </div>
    </div>
  );
}
