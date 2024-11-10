export const incrementTimes = async (id) => {
    const weekNumber = new Date().getWeek()
    const upsert = await prisma.weekAdjustments.upsert({
        where: {
            habitId: id,
            weekNumber
        },
        create: {
            weekNumber,
            times: 1
        },
        update: {
            weekNumber,
            times: {
                increment: 1
            }
        }

    })
}


export default async function handler(req, res) {
    const { id } = req.query
    const habit = await incrementTimes(id, times)
    res.status(200)
}
