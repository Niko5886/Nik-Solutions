import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import SupportPage from './pages/SupportPage'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
