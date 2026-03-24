import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './routes/Router'
import InstallProvider from './context/InstallContext'

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <InstallProvider>
        <RouterProvider router={router}></RouterProvider>
      </InstallProvider>
    </StrictMode>,
  </div>

)
