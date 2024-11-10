'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const ReactQueryProvider = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 6,
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools> */}
            {children}
            {/* </ReactQueryDevtools> */}
        </QueryClientProvider>
    )
}

export { useQuery } from "@tanstack/react-query"