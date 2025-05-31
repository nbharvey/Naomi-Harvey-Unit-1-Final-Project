import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookshelf from './pages/library/Bookshelf';
import "./index.css";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import PageNotFound from './components/404Page';
import AboutNaomi from './pages/AboutNaomi';
import AboutProjects from './pages/AboutProjects';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className='body-wrapper'>
          <Header />
          <Navbar />
          <main className='main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Bookshelf />} />
              <Route path="/aboutnaomi" element={<AboutNaomi />} />
              <Route path="/aboutprojects" element={<AboutProjects />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App
