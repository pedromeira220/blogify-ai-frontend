import { BlogContextProvider } from '@/contexts/blog.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogContextProvider>
        <Component {...pageProps} />
      </BlogContextProvider>
    </QueryClientProvider>
  )
}
