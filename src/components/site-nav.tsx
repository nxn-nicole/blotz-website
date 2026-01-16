"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export default function SiteNav() {
  const [language, setLanguage] = useState<"en" | "zh">("zh");
  const languageLabel = language === "zh" ? "中文" : "English";

  return (
    <nav className="sticky top-0 z-50 border-b border-transparent bg-[#F5F9FA] backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-bold text-[#9AD513]"
        >
          <Image
            src="/bun-icon.png"
            alt="Blotz"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          Blotz
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            首页
          </Link>
          <Link
            href="/features"
            className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            功能
          </Link>
          <Link
            href="/feedback"
            className="text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            反馈
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <span className="text-gray-900 dark:text-gray-100">
                  {languageLabel}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 rounded-2xl border-gray-200 p-3 shadow-xl dark:border-zinc-800 bg-white"
            >
              <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                Language
              </DropdownMenuLabel>
              <DropdownMenuItem
                className={`rounded-xl px-3 py-2 text-sm font-medium data-[highlighted]:font-semibold ${
                  language === "en"
                    ? "bg-gray-50 text-gray-900 dark:bg-zinc-900 dark:text-gray-100"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onSelect={() => setLanguage("en")}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`rounded-xl px-3 py-2 text-sm font-medium data-[highlighted]:font-semibold ${
                  language === "zh"
                    ? "bg-gray-50 text-gray-900 dark:bg-zinc-900 dark:text-gray-100"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onSelect={() => setLanguage("zh")}
              >
                中文
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
