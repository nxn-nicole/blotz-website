import Image from "next/image";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50  bg-[#F5F9FA] backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="#home"
            className={`${baloo.className} flex items-center gap-2 text-3xl font-bold text-[#9AD513]`}
          >
            <Image
              src="/bun-icon.png"
              alt="Blotz"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            Blotz
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              首页
            </a>
            <a
              href="#features"
              className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              功能
            </a>
            <a
              href="#feedback"
              className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              反馈
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex min-h-screen items-center px-6 pb-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <div className="space-y-4 text-left sm:space-y-6">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                提升工作效率，使用
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

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
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
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-gray-200 bg-gray-50 py-20 dark:border-zinc-800 dark:bg-zinc-800/50"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            保持有序所需的一切
          </h2>
          <p className="mb-16 text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            一款智能、高效且可扩展的待办事项应用，旨在提高生产力、简化任务管理，并支持个人和团队工作流程。
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                快速添加任务
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                瞬间添加任务，让您的工作流程更加顺畅
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">🤖</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                AI 辅助规划
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                利用人工智能优化您的任务规划和优先级
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">📋</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                任务分解
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                将复杂任务分解为可管理的小步骤
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        id="feedback"
        className="border-t border-gray-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            我们想听到您的反馈！
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            帮助我们改进 Blotz，分享您的想法和建议
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
            <span>提交反馈</span>
          </a>
        </div>
      </section>
    </div>
  );
}
