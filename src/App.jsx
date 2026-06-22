import { Link, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import BuildsPage from './pages/BuildsPage.jsx'
import BuildDetailPage from './pages/BuildDetailPage.jsx'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">
          <span className="brand-mark">⚔️</span>
          <span className="brand-text">
            MHGU <strong>Companion</strong>
          </span>
        </Link>
        {!isHome && (
          <Link to="/" className="header-link">
            ← Cambiar de arma
          </Link>
        )}
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arma/:weaponId" element={<BuildsPage />} />
          <Route path="/build/:buildId" element={<BuildDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          Companion no oficial de Monster Hunter Generations Ultimate. Datos
          curados por la comunidad, orientativos. Monster Hunter © CAPCOM.
        </p>
      </footer>
    </div>
  )
}
