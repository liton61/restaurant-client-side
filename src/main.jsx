import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './authentication/Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)