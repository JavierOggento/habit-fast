import { prisma } from "@/lib/prisma"

const initializeHabits = async () => {
    const habits = await prisma.habit.create({
        data: {
            name: 'habito' + Math.round(Math.random() * 100),
            times: 3
        }
    })
}

export const getHabits = async () => {
    const habits = await prisma.habit.findMany()
    return habits
}

export const addHabit = async (name, times) => {
    const habit = await prisma.habit.create({
        data: {
            name,
            times
        }
    })
}


export default async function handler(req, res) {
    if (req.method === 'GET') {
        const habits = await getHabits()
        console.log({ habits });
        res.status(200).json(habits)
    } else if (req.method === 'POST') {
        const { name, times } = req.body
        await addHabit(name, times)
        res.status(200).json({ message: 'Habit added' })
    }
}



// initializeHabits()