import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import MobileAppPage from './pages/MobileAppPage'
import OnlineShopPage from './pages/OnlineShopPage'
import SupportPage from './pages/SupportPage'
import WebSitePage from './pages/WebSitePage'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="mobile-app" element={<MobileAppPage />} />
        <Route path="online-shop" element={<OnlineShopPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="web-site" element={<WebSitePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
