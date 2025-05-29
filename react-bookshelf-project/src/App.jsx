import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bookshelf from './pages/library/Bookshelf'
import "./index.css";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import PageNotFound from './components/404Page';
import AboutNaomi from './pages/AboutNaomi';
import AboutProjects from './pages/AboutProjects';

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Bookshelf />} />
        <Route path="/aboutnaomi" element={<AboutNaomi />} />
        <Route path="/aboutprojects" element={<AboutProjects />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
