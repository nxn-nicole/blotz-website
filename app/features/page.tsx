"use client";

import Image from "next/image";
import { useState } from "react";
import SiteNav from "../../components/site-nav";
import MiniCalendar from "../../components/mini-calendar";
import TaskCard from "../../components/task-card";

export default function FeaturesPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Calendar 页面演示
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
            你可以直接用语音描述今天的安排或想做的事，AI 会实时理解并自动拆解成清晰的任务与步骤，
            连同时间信息一起整理进日历。无需手动输入，把零散想法变成可执行计划，一句话就能完成添加与管理。
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
            <div>• 语音输入即刻生成结构化任务</div>
            <div>• 自动拆解步骤并补全时间</div>
            <div>• 日历视图直观可管理</div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <video
              className="h-auto w-[240px] sm:w-[240px]"
              src="/videos/calendar-page-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
    </div>
  );
}
