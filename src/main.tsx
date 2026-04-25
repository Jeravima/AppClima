import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppClima } from './AppClima'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppClima/>
  </StrictMode>,
)
