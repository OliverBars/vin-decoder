import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home/Home'
import Variables from './pages/Variables/Variables'
import VariableDetail from './pages/VariableDetail/VariableDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header__inner">
          <NavLink to="/" className="header__logo">
            VIN Decoder
          </NavLink>
          <nav className="header__nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}
            >
              Decoder
            </NavLink>
            <NavLink
              to="/variables"
              className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}
            >
              Variables
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/variables/:variableId" element={<VariableDetail />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>Data provided by <a href="https://vpic.nhtsa.dot.gov/api/" target="_blank" rel="noreferrer">NHTSA vPIC API</a></p>
      </footer>
    </BrowserRouter>
  )
}

export default App
