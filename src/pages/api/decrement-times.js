export const decrementTimes = async (id) => {
    const weekNumber = new Date().getWeek()
    const upsert = await prisma.weekAdjustments.upsert({
        where: {
            habitId: id,
            weekNumber
        },
        create: {
            weekNumber,
            times: -1
        },
        update: {
            weekNumber,
            times: {
                decrement: 1
            }
        }

    })
}

export default async function handler(req, res) {
    const { id, times } = req.query
    const habit = await decrementTimes(id, times)
    res.status(200)
}