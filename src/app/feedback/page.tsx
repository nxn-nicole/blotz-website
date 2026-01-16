import { useTranslations } from "next-intl";
import SiteNav from "../../components/site-nav";

export default function FeedbackPage() {
  const t = useTranslations("feedback");

  return (
    <div className="relative min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-950">
      <SiteNav />
      <div className="pointer-events-none absolute bottom-6 right-6 hidden md:block"></div>
      <section className="py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {t("title")}
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            {t("subtitle")}
          </p>
          <a
            href="https://m3cetbcyp2d.usttp.larksuite.com/share/base/form/shrutCtpZYEZ0KeRokQpJ7K96rd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9AD513] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:border-2 hover:border-[#9AD513] hover:bg-transparent hover:text-[#9AD513]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{t("button")}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
