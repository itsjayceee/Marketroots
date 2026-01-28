import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./components/about.jsx";
import Marketplace from "./components/Marketplace.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;
