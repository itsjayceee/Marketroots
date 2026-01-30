import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import WhyChooseUs from './components/WhyChooseUs';
import StrengtheningRoots from './components/StrengtheningRoots';
import PhilippineHarvests from './components/PhilippineHarvests';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Chat from './components/Chat';

function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full">
        <Hero />
        <WhatWeOffer />
        <WhyChooseUs />
        <StrengtheningRoots />
        <PhilippineHarvests />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
