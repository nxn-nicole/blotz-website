import SiteNav from "../../components/site-nav";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />
      <section className="border-t border-gray-200 bg-gray-50 py-20 dark:border-zinc-800 dark:bg-zinc-800/50">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            保持有序所需的一切
          </h1>
          <p className="mb-16 text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            一款智能、高效且可扩展的待办事项应用，旨在提高生产力、简化任务管理，并支持个人和团队工作流程。
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">⚡</div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                快速添加任务
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                瞬间添加任务，让您的工作流程更加顺畅
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">🤖</div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                AI 辅助规划
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                利用人工智能优化您的任务规划和优先级
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 text-3xl">📋</div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                任务分解
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                将复杂任务分解为可管理的小步骤
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
