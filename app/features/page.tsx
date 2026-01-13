import Image from "next/image";
import SiteNav from "../../components/site-nav";
import MiniCalendar from "../../components/mini-calendar";
import TaskCard from "../../components/task-card";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F5F9FA] font-sans dark:bg-zinc-900">
      <SiteNav />
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            智能任务视图
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
            把任务、日期和状态都放进清晰的日程页里
          </p>
        </div>

        <div className="mt-10 w-full max-w-[420px]">
          <div className="relative">
            <Image
              src="/iPhone16.png"
              alt="iPhone 16 Frame"
              width={840}
              height={1680}
              className="h-auto w-full"
              priority
            />
            <div className="absolute inset-[8%] rounded-[24px] bg-[#F6FAFB] p-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-gray-900">今天</div>
                <div className="h-9 w-9 rounded-full bg-[#D9E3EA]" />
              </div>

              <MiniCalendar />

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full bg-black px-3 py-1 text-white">
                  全部 5
                </span>
                <span className="rounded-full border border-gray-300 px-3 py-1 text-gray-700">
                  待办 2
                </span>
                <span className="rounded-full border border-gray-300 px-3 py-1 text-gray-700">
                  进行中 1
                </span>
                <span className="rounded-full border border-gray-300 px-3 py-1 text-gray-700">
                  已完成 2
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <TaskCard
                  title="按时到达学校"
                  time="08:00"
                  status="pending"
                  highlightTime
                />
                <TaskCard
                  title="跑步锻炼身体"
                  time="08:00"
                  status="done"
                  accent="blue"
                />
                <TaskCard
                  title="去商店买蔬菜"
                  time="15:00"
                  status="pending"
                  highlightTime
                />
                <TaskCard
                  title="逛公园"
                  time="15:00"
                  status="pending"
                  highlightTime
                />
                <TaskCard
                  title="做信息课程作业"
                  time="20:00"
                  status="pending"
                />
              </div>

              <div className="mt-32 flex items-center justify-between px-5 py-3 text-xs text-gray-500">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FF]">
                  <Image
                    src="/green-house.png"
                    alt="Home"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FF]">
                  <Image
                    src="/images-svg/star-dashed.svg"
                    alt="Favorites"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#9AD513] to-[#3D8DE0]">
                  <Image
                    src="/bun-white.png"
                    alt="Add"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FF]">
                  <Image
                    src="/images-svg/settings-dashed.svg"
                    alt="Settings"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F1FF]">
                  <Image
                    src="/images-svg/house-dashed.svg"
                    alt="Home"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
