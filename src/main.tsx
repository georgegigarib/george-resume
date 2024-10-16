import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/themeswitch.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Navbar from './layout/Navbar.tsx';
import '../i18n.config.ts';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const location = useLocation();

  const hiddenPaths = ['/resume'];

  return (
    <>
      {!hiddenPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);
