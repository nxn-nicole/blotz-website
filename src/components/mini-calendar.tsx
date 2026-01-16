type MiniCalendarProps = {
  activeIndex?: number;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = ["12", "13", "14", "15", "16", "17", "18"];

export default function MiniCalendar({ activeIndex = 1 }: MiniCalendarProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-gray-400">
        {days.map((day) => (
          <span key={day} className="w-8 text-center">
            {day}
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-sm font-semibold text-gray-300">
        {dates.map((date, index) => (
          <div key={date} className="flex w-8 flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                index === activeIndex
                  ? "bg-[#EBF0FE] text-gray-900"
                  : "text-gray-300"
              }`}
            >
              {date}
            </div>
            <div
              className={`mt-1 h-1.5 w-1.5 rounded-full ${
                index <= activeIndex ? "bg-[#9AD513]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
