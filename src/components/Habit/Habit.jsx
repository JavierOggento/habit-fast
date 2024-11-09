import { Button } from "@/components/ui/button";

export const Habit = ({name, times}) => {
    return (
        <div className="flex flex-row items-center gap-8">
            <div className="columns-2">{name}</div>
            <Button variant="outline">-</Button>
            <span>{times}</span>
            <Button variant="outline">+</Button>
            {/* Rest */}
            <Button>✓</Button>
        </div>
    )
}