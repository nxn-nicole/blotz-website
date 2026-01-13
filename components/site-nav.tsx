import Image from "next/image";
import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F5F9FA] backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900">
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
        </div>
      </div>
    </nav>
  );
}
