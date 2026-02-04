import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import SiteNav from "../components/site-nav";
import ScrollReveal from "../components/scroll-reveal";
import { FaAndroid, FaApple } from "react-icons/fa";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-[#6BBF00] to-secondary overflow-hidden relative">
        {/* Decorative Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-12 h-12 bg-white/10 rounded-xl rotate-12 animate-float opacity-40 backdrop-blur-sm border border-white/20" />
          <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-white/15 rounded-full animate-float opacity-30 backdrop-blur-sm border border-white/20 [animation-delay:1s]" />
          <div className="absolute bottom-[30%] left-[20%] w-10 h-10 bg-white/10 rounded-lg -rotate-12 animate-float opacity-40 backdrop-blur-sm border border-white/20 [animation-delay:2s]" />
          <div className="absolute top-[60%] right-[10%] w-14 h-14 bg-white/10 rounded-2xl rotate-45 animate-float opacity-30 backdrop-blur-sm border border-white/20 [animation-delay:1.5s]" />
          <div className="absolute bottom-[40%] right-[20%] w-12 h-12 bg-secondary/10 rounded-full animate-float opacity-35 backdrop-blur-sm border border-secondary/20 [animation-delay:0.8s]" />
          <div className="absolute top-[45%] left-[25%] w-10 h-10 bg-secondary/10 rounded-lg rotate-12 animate-float opacity-30 backdrop-blur-sm border border-secondary/20 [animation-delay:2.5s]" />
          
          {/* Abstract background lines/waves */}
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,45 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.05" />
            <path d="M0,60 Q25,55 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.05" />
            <path d="M0,40 Q25,35 50,40 T100,40" fill="none" stroke="white" strokeWidth="0.05" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 w-full relative z-10 text-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[1.08] md:leading-[1.06] lg:leading-[1.06] mb-4 sm:mb-6 drop-shadow-sm">
              {t("titleLine1")}
              <br />
              <span className="text-white/90">{t("titleLine2")}</span>
            </h1>
            
            <p className="text-xs sm:text-sm lg:text-base font-medium opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              {t("subtitleLine1")} {t("subtitleLine2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="https://testflight.apple.com/join/juXbBxHN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-primary rounded-3xl font-black shadow-xl active:scale-95 group btn-hover-glow hover:shadow-2xl transition-all border-2 border-white"
              >
                <FaApple className="text-2xl leading-none shrink-0 transition-transform group-hover:-translate-y-1" />
                <span className="text-lg font-black tracking-tight">App Store</span>
              </a>
              <a
                href="https://www.pgyer.com/blotztask"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-primary rounded-3xl font-black shadow-xl active:scale-95 group btn-hover-glow hover:shadow-2xl transition-all border-2 border-white"
              >
                <FaAndroid className="text-2xl leading-none shrink-0 transition-transform group-hover:-translate-y-1" />
                <span className="text-lg font-black tracking-tight">Android</span>
              </a>
            </div>
          </div>
        </div>

        {/* Flat bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-white"></div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="features" className="py-12 lg:py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                {t("featuresTitle") || "Powerful Features"}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("featuresSubtitle") || "Everything you need to stay organized and productive"}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <ScrollReveal animation="scale">
              <div className="group relative h-full bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-primary-horizontal text-white text-xs font-bold rounded-full">
                      {t("feature1Label")}
                    </span>
                  </div>

                  <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100">
                    <video
                      src="/videos/calendar-page-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base font-black mb-2 text-foreground">
                    {t("feature1Title")}
                  </h3>

                  <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                    {t("feature1Description")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature Card 2 */}
            <ScrollReveal animation="scale" delay={100}>
              <div className="group relative h-full bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-primary-horizontal text-white text-xs font-bold rounded-full">
                      {t("feature2Label")}
                    </span>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <video
                      src="/videos/star-spark-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base font-black mb-2 text-foreground">
                    {t("feature2Title")}
                  </h3>

                  <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                    {t("feature2Description")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature Card 3 */}
            <ScrollReveal animation="scale" delay={200}>
              <div className="group relative h-full bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-primary-horizontal text-white text-xs font-bold rounded-full">
                      {t("feature3Label")}
                    </span>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <video
                      src="/videos/break-down-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base font-black mb-2 text-foreground">
                    {t("feature3Title")}
                  </h3>

                  <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                    {t("feature3Description")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== FEEDBACK ==================== */}
      <section id="feedback" className="py-12 lg:py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              {t("feedbackTitle")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("feedbackSubtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <a
              href="https://m3cetbcyp2d.usttp.larksuite.com/share/base/form/shrutCtpZYEZ0KeRokQpJ7K96rd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary-horizontal text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-glow"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t("feedbackButton")}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-medium text-foreground/80">
            <Image src="/bun-icon.png" alt="Blotz" width={20} height={20} className="h-5 w-5" />
            Blotz
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-sm text-muted-foreground">© 2026 Blotz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
