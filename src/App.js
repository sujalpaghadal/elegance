import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import Style from "./pages/style/Style";
import Jewelry from "./pages/jewelry/Jewelry";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style" element={<Style />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
