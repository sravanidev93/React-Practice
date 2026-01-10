import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StopWatch from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch />
  </StrictMode>,
)
