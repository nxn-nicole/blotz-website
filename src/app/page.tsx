import Image from "next/image";
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
      <section className="min-h-screen flex items-center bg-linear-to-br from-primary via-primary to-[#86C200] overflow-hidden relative">
        {/* Decorative Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-12 h-12 bg-white/10 rounded-xl rotate-12 animate-float opacity-40 backdrop-blur-sm border border-white/20" />
          <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-white/15 rounded-full animate-float opacity-30 backdrop-blur-sm border border-white/20 [animation-delay:1s]" />
          <div className="absolute bottom-[30%] left-[20%] w-10 h-10 bg-white/10 rounded-lg -rotate-12 animate-float opacity-40 backdrop-blur-sm border border-white/20 [animation-delay:2s]" />
          <div className="absolute top-[60%] right-[10%] w-14 h-14 bg-white/10 rounded-2xl rotate-45 animate-float opacity-30 backdrop-blur-sm border border-white/20 [animation-delay:1.5s]" />
          
          {/* Abstract background lines/waves */}
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,45 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.05" />
            <path d="M0,60 Q25,55 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.05" />
            <path d="M0,40 Q25,35 50,40 T100,40" fill="none" stroke="white" strokeWidth="0.05" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 w-full relative z-10 text-center">
          <div className="text-white">
            <h1 className="text-[42px] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-8xl 2xl:text-[92px] font-black leading-[1.08] sm:leading-[1.08] md:leading-[1.06] lg:leading-[1.06] mb-6 sm:mb-7 drop-shadow-sm">
              {t("titleLine1")}
              <br />
              <span className="text-white/90">{t("titleLine2")}</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-medium opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              {t("subtitleLine1")} {t("subtitleLine2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://testflight.apple.com/join/juXbBxHN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-[200px] h-[60px] bg-white text-primary rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] active:scale-95 group"
              >
                <FaApple className="text-[22px] leading-none shrink-0 transition-transform group-hover:-translate-y-0.5" />
                <span className="text-[18px] font-black tracking-tight">App Store</span>
              </a>
              <a
                href="https://www.pgyer.com/blotztask"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-[200px] h-[60px] bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-2xl hover:bg-white/30 hover:scale-[1.03] transition-all duration-300 shadow-lg active:scale-95 group"
              >
                <FaAndroid className="text-[22px] leading-none shrink-0 transition-transform group-hover:-translate-y-0.5" />
                <span className="text-[18px] font-black tracking-tight">Android</span>
              </a>
            </div>
          </div>
        </div>

        {/* Layered wave decoration */}
        <div className="absolute bottom-0 left-0 w-full leading-0">
          <svg className="relative block w-full h-[60px] lg:h-[120px] opacity-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.23,113.13,145.51,122.36,213.08,107.82,282.6,92.83,321.39,56.44,321.39,56.44Z" fill="white"></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-[50px] lg:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.23,113.13,145.51,122.36,213.08,107.82,282.6,92.83,321.39,56.44,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ==================== FEATURE 1 ==================== */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="scale" className="order-2 lg:order-1 flex justify-center">
              <video
                src="/videos/calendar-page-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[260px] sm:max-w-[280px] h-auto rounded-4xl shadow-xl"
              />
            </ScrollReveal>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <ScrollReveal>
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  {t("feature1Label")}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 sm:mt-3 mb-3 sm:mb-4">
                  {t("feature1Title")}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {t("feature1Description")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE 2 ==================== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  {t("feature2Label")}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 sm:mt-3 mb-3 sm:mb-4">
                  {t("feature2Title")}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {t("feature2Description")}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="scale" className="flex justify-center">
              <video
                src="/videos/star-spark-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[260px] sm:max-w-[280px] h-auto rounded-4xl shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE 3 ==================== */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="scale" className="order-2 lg:order-1 flex justify-center">
              <video
                src="/videos/break-down-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[260px] sm:max-w-[280px] h-auto rounded-4xl shadow-xl"
              />
            </ScrollReveal>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <ScrollReveal>
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  {t("feature3Label")}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 sm:mt-3 mb-3 sm:mb-4">
                  {t("feature3Title")}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-4 sm:mb-6">
                  {t("feature3Description")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <a
                  href="/features"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-primary hover:underline"
                >
                  {t("learnMoreLink")} →
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-medium text-foreground/80">
            <Image src="/bun-icon.png" alt="Blotz" width={20} height={20} className="h-5 w-5" />
            Blotz
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Blotz</p>
        </div>
      </footer>
    </div>
  );
}
