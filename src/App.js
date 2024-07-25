import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Aboutpage from "./pages/about/Aboutpage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
