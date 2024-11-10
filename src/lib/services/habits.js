import { useQuery } from "@/lib/react-query"
import { useMutation } from "@tanstack/react-query"

export const useHabits = () => {
    return useQuery({
        queryKey: ['habits'],
        queryFn: async () => {
            const response = await fetch('/api/habits')
            return await response.json()
        }
    })
}

export const useHabit = (id) => {
    return useQuery({
        queryKey: ['habit', id],
        queryFn: async () => {
            const response = await fetch('/api/habits/' + id)
            return await response.json()
        }
    })
}

export const useCreateHabit = (name, times) => {
    return useMutation({
        mutationFn: async () => {
            const response = await fetch('/api/habits', {
                method: 'POST',
                body: JSON.stringify({ name, times }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await response.json()
        }
    })
}