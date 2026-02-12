import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Forms from './pages/Halleluya';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Events from './pages/Events';
import SmoothScroll from './components/SmoothScroll'; 
import NoiseGrain from './components/NoiseGrain';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import About from './pages/About';
import './style/App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <SmoothScroll> 
      <BrowserRouter>
        <NoiseGrain />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/halleluya" element={<Forms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  )
}

export default App;