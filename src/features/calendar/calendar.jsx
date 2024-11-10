'use client'
import { useHabits } from "@/lib/services/habits"

export const Calendar = () => {
    const { data: habits, isLoading } = useHabits()
    return (
        <>
            {isLoading ? <div>Loading...</div> : habits.map(habit => <p key={habit.id}>{habit.name}</p>)}


            <table>
                <thead>
                    <tr>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gim</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gim</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Caminar</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}