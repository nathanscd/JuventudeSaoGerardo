import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './pages/Forms';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forms" element={<Forms />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App