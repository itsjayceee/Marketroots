import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./components/about.jsx";
import Marketplace from "./components/Marketplace.jsx";
import ProductOffers from "./components/ProductOffers.jsx";
import OfferDetails from "./components/OfferDetails.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/marketplace" element={<Marketplace />} />

        {/* Carrot inquiry page (offers page) */}
        <Route path="/marketplace/product/:productName" element={<ProductOffers />} />

        {/* chosen offer details page */}
        <Route path="/marketplace/offer/:offerId" element={<OfferDetails />} />
      </Routes>
    </>
  );
}

export default App;
