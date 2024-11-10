import { prisma } from "@/lib/prisma"


export const getHabit = async (id) => {
    const habit = await prisma.habit.findUnique({
        where: {
            id
        }
    })
    return habit
}


export const deleteHabit = async (id) => {

    const deleteWeekAdjustments = prisma.weekAdjustments.deleteMany({
        where: {
            habitId: id
        }
    })

    const deleteActivity = prisma.activity.deleteMany({
        where: {
            habitId: id
        }
    })

    const deleteHabit = prisma.habit.delete({
        where: {
            id
        }
    })

    const transaction = await prisma.$transaction([deleteWeekAdjustments, deleteActivity, deleteHabit])
}

export default async function handler(req, res) {
    const { id } = req.query
    if (req.method === 'GET') {
        const habit = await getHabit(id)
        res.status(200).json(habit)
    } else if (req.method === 'DELETE') {
        await deleteHabit(id)
        res.status(200).json({ message: 'Habit deleted' })
    }
}

