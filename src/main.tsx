import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/themeswitch.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Me from './routes/Dashboard.tsx';
import Navbar from './layout/Navbar.tsx';
import '../i18n.config.ts';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import the Redux store

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap Router with Provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Me />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
