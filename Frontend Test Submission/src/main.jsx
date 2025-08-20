import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DashBoard from './components/DashBoard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/dashboard" element={<DashBoard/>}/>
    
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
