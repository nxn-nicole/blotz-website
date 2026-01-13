"use client";

import { useState } from "react";

type TaskCardProps = {
  title: string;
  time: string;
  status: "pending" | "done";
  accent?: "blue" | "green";
  highlightTime?: boolean;
};

const accentStyles: Record<NonNullable<TaskCardProps["accent"]>, string> = {
  blue: "bg-[#E6F3FF] text-[#3D8DE0]",
  green: "bg-[#E7F8F0] text-[#34C37E]",
};

export default function TaskCard({
  title,
  time,
  status,
  accent = "blue",
  highlightTime = false,
}: TaskCardProps) {
  const [checked, setChecked] = useState(status === "done");

  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-pressed={checked}
            aria-label={checked ? "已完成" : "未完成"}
            onClick={() => setChecked((prev) => !prev)}
            className={`flex h-6 w-6 items-center justify-center rounded-md text-xs transition ${
              checked
                ? accentStyles[accent]
                : "border-2 border-gray-300 text-transparent"
            }`}
          >
            ✓
          </button>
          <div>
            <div className="text-sm font-semibold text-gray-900">{title}</div>
            <div className="text-xs text-gray-400">{time}</div>
          </div>
        </div>
        <div
          className={`text-xs font-semibold ${
            highlightTime ? "text-red-500" : "text-gray-500"
          }`}
        >
          {time}
        </div>
      </div>
    </div>
  );
}
