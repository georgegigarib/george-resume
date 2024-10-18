import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/locales/i18n.config'
import store from '@/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppTestProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={children} />
          </Routes>
        </Router>
      </Provider>
    </I18nextProvider>
  )
}

export default AppTestProvider
