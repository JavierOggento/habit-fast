import { Habit } from "@/components/Habit/Habit";

export const HabitList = () => {
    return (
        <>
            <span>Hábitos</span>
            <Habit name="Gim" times="3" />
            <Habit name="Caminar" times="3" />
        </>
    )
}