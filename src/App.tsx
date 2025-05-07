import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './styles/reset.css'
import './styles/App.css'
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
