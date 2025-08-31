import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router.jsx'
import { ThemeProvider } from './theme/theme-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme='light' storageKey='theme'>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
