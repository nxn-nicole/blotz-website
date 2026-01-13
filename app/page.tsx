import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import SiteNav from "../components/site-nav";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />

      {/* Hero Section */}
      <div className="mx-auto flex w-full max-w-6xl min-h-screen items-center justify-between gap-16 px-6 lg:px-20">
        <div className="flex-1 items-start text-left sm:space-y-6 lg:-mt-36">
          {/* Main Heading */}
          <div className="sm:space-y-3">
            <h1 className="text-xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              提升工作效率
            </h1>
            <h1
              className={`${baloo.className} text-xl font-bold leading-tight tracking-tight text-[#9AD513] sm:text-5xl md:text-6xl lg:text-7xl dark:text-blue-400`}
            >
              Blotz
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
              专为 ADHD 用户设计的任务管理应用
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
              帮助您轻松保持有序，完成更多任务
            </p>
            <p className="mt-2 text-base font-medium text-[#9AD513] sm:mt-4 sm:text-lg md:text-xl dark:text-blue-400">
              立即在 iOS 和 Android 上试用测试版！
            </p>
            <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-500">
              * 当前为测试版本，欢迎反馈
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col items-start gap-3 pt-2 sm:gap-4 sm:pt-4 sm:flex-row">
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
              <span>iOS</span>
            </a>

            {/* Android Download Button */}
            <a
              href="https://www.pgyer.com/blotztask"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#9AD513] bg-white px-8 py-4 text-lg font-semibold text-[#9AD513] transition-all hover:scale-105 hover:bg-gray-50 dark:border-blue-400 dark:bg-zinc-800 dark:text-blue-400 dark:hover:bg-zinc-700 sm:w-[200px]"
            >
              <Image
                src="/android-icon.png"
                alt="Android"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>Android</span>
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <Image
            src="/blotz-calendar-page.png"
            alt="Blotz Calendar"
            width={1040}
            height={1080}
            className="h-auto w-full rounded-3xl object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
