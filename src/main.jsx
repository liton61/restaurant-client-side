import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './authentication/Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </AuthProvider>
)