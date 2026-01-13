"use client";

import { useState } from "react";
import SiteNav from "../../components/site-nav";

import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      accent: "#9AD513",
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
      accent: "#9AD513",
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
      accent: "#9AD513",
    },
  ];

  const activeSection = sections[activeIndex];

  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl px-6">
        <section className="relative overflow-hidden rounded-[32px] bg-white/70 px-8 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:my-16">
          <div
            key={activeIndex}
            className="feature-slide flex min-h-[420px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16"
          >
            <div className="max-w-xl text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
                style={{ borderColor: activeSection.accent }}
              >
                Feature {activeIndex + 1}
              </div>
              <h1
                className={`${baloo.className} mt-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white`}
              >
                {activeSection.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                {activeSection.description}
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-600 sm:text-base dark:text-gray-400">
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
              <div className="w-[240px] overflow-hidden rounded-3xl bg-white shadow-lg">
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
            className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#9AD513] bg-white text-[#9AD513] shadow-md transition hover:scale-105"
            aria-label="Next feature"
          >
            ↓
          </button>
        </section>
      </div>
    </div>
  );
}
