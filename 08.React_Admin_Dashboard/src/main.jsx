import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap my App in BrowserRouter to make SPA  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
