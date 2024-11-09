import { HabitList } from "@/features/habitList/habitList";
import { Calendar } from "@/features/calendar/calendar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Calendar />
        <HabitList />
      </main>
    </div>
  );
}