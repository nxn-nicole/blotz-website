import SiteNav from "../../components/site-nav";

import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FeaturesPage() {
  const sections = [
    {
      title: "Calendar 页面演示",
      description:
        "你可以直接用语音描述今天的安排或想做的事，AI 会实时理解并自动拆解成清晰的任务与步骤，连同时间信息一起整理进日历。无需手动输入，把零散想法变成可执行计划，一句话就能完成添加与管理。",
      bullets: [
        "语音输入即刻生成结构化任务",
        "自动拆解步骤并补全时间",
        "日历视图直观可管理",
      ],
      video: "/videos/calendar-page-video.mp4",
    },
    {
      title: "Breakdown 智能拆解",
      description:
        "复杂任务不用再手动分步骤。描述你的目标，AI 会自动拆成更小的行动项，帮助你专注下一步。",
      bullets: [
        "大任务自动拆分为清晰步骤",
        "优先级与时长建议更合理",
        "减少拖延，立即开始",
      ],
      video: "/videos/break-down-video.mp4",
    },
    {
      title: "Star Spark 高亮进度",
      description:
        "Star Spark 会自动汇总你所有未完成的任务，把“待办堆积”变成清晰的行动列表。你可以长按任意任务，让 AI 预测所需时间并一键加入日历，快速完成排期。想要一点仪式感？从 Star Spark 还能进入扭蛋机页面，随机抽取一个任务作为今天的挑战，让完成任务更轻松、更有趣。",
      bullets: [
        "未完成任务自动汇总成行动清单",
        "长按任务即可预测时长并加入日历",
        "扭蛋机随机挑战，提升完成动力",
      ],
      video: "/videos/star-spark-video.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />
      {sections.map((section) => (
        <section
          key={section.title}
          className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl text-left">
            <h1
              className={`${baloo.className} text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white`}
            >
              {section.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
              {section.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
              {section.bullets.map((bullet) => (
                <div key={bullet}>• {bullet}</div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-[240px] overflow-hidden rounded-3xl bg-white shadow-lg">
              <video
                className="h-auto w-full"
                src={section.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
