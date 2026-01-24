import { useTranslations } from "next-intl";
import SiteNav from "../../components/site-nav";
import { Sparkles, Mic, Zap, Calendar as CalendarIcon, ArrowRight } from "lucide-react";

export default function FeaturesPage() {
  const t = useTranslations("feature");
  const sectionMeta = [
    { 
      key: "calendar", 
      video: "/videos/calendar-page-video.mp4",
      icon: Mic,
      color: "blue"
    },
    { 
      key: "breakdown", 
      video: "/videos/break-down-video.mp4",
      icon: Zap,
      color: "yellow"
    },
    { 
      key: "starSpark", 
      video: "/videos/star-spark-video.mp4",
      icon: Sparkles,
      color: "purple"
    },
  ] as const;

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <SiteNav />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-32">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            The power of <span className="text-primary italic">AI</span> in your hands
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore how Blotz uses advanced AI to transform the way you plan, work, and focus.
          </p>
        </div>

        <div className="space-y-32">
          {sectionMeta.map((section, index) => {
            const Icon = section.icon;
            const isEven = index % 2 === 0;
            
            return (
              <section 
                key={section.key}
                className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold glass border-primary/20 text-primary`}>
                    <Icon className="h-4 w-4" />
                    {t("badge", { index: index + 1 })}
                  </div>
                  
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    {t(`sections.${section.key}.title`)}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t(`sections.${section.key}.description`)}
                  </p>
                  
                  <ul className="space-y-4">
                    {(t.raw(`sections.${section.key}.bullets`) as string[]).map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 text-primary font-bold group">
                    Learn more about this feature 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Video/Visual Content */}
                <div className="flex-1 w-full max-w-xl">
                  <div className="relative aspect-square rounded-[3rem] glass p-4 overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                      <video
                        className="h-[80%] w-auto rounded-3xl shadow-2xl"
                        src={section.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Section */}
        <section className="mt-40 glass rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Download the beta version now and experience a new way of staying organized.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://testflight.apple.com/join/juXbBxHN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
              >
                Join iOS Beta
              </a>
              <a
                href="https://www.pgyer.com/blotztask"
                target="_blank"
                rel="noopener noreferrer"
                className="glass border-primary/20 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              >
                Download Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Image
              src="/bun-icon.png"
              alt="Blotz"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            Blotz
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Blotz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Helper to keep the file valid since I'm using Image
import Image from "next/image";
