import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import '@/styles/themeswitch.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Dashboard from '@/app/pages/Dashboard'
import { Provider } from 'react-redux'
import store from '@/store'
import NavBar from '@/app/layout/NavBar'

export function App() {
  const location = useLocation()

  const hiddenPaths = ['']

  return (
    <>
      {!hiddenPaths.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
)
