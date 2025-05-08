import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './styles/reset.css'
import './styles/App.css'
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
