import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/reset.css'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>        
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
