import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import App from './App.tsx'
import ThemeProvider from './context/ThemeContext.tsx'

const rootId = (document.getElementById('root') as HTMLElement);

createRoot(rootId).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <Toaster />
  </StrictMode>,
)
