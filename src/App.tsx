import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Forms from './pages/Forms';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Events from './pages/Events';
import SmoothScroll from './components/SmoothScroll'; 
import NoiseGrain from './components/NoiseGrain';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import './App.css';

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
          <Route path="/halleluya-bus" element={<Forms />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/fotos" element={<Gallery />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  )
}

export default App;