import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Bookshelf from './pages/library/Bookshelf'
import "./index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageNotFound from './components/404Page';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Bookshelf />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
  
      </Routes>
      <Footer />
    </>
  )
}

export default App
