import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <StrictMode>
    <App />
  </StrictMode>
  </HashRouter>

)
