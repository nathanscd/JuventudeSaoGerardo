import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './pages/Forms';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Events from './pages/Events';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/halleluya-bus" element={<Forms />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/eventos" element={<Events />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App