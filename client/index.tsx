import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { routes } from './routes.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()
const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  // wrapping the app in a QueryClientProvider
  // and passing the QueryClient instance as a prop
  // Adding ReactQueryDevTools
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
