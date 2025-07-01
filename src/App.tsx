import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from './assets/logo-ysl.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <header className="text-center py-10">
          <img src={logo} alt="Logo YSL ENERGIE" className="w-48 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">YSL ENERGIE</h1>
          <p className="text-xl italic">ON VA RECHARGER VOTRE MAISON !</p>
        </header>

        <nav className="flex justify-center gap-6 text-blue-400 mb-10">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <Link to="/about">À propos</Link>
          <span>/</span>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
