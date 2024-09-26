import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Me from './routes/Dashboard.tsx'
import Navbar from './layout/Navbar.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Me />} />
    </Routes>
  </Router>
  </StrictMode>
)
