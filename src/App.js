import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
import Development from "./pages/Development";
import GraphicDesign from "./pages/GraphicDesign";
import FineArt from "./pages/FineArt";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlueReso from "./pages/BlueReso";
import Laveer from "./pages/Laveer";
import Isallo from "./pages/Isallo";
import RuffLifePet from "./pages/RuffLifePet";
import TypeASpaces from "./pages/TypeASpaces";
import UnionAssembly from "./pages/UnionAssembly";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/development" element={<Development />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/fineart" element={<FineArt />} />
            <Route path="/laveer" element={<Laveer />} />
            <Route path="/typeaspaces" element={<TypeASpaces />} />
            <Route path="/rufflifepet" element={<RuffLifePet />} />
            <Route path="/unionassembly" element={<UnionAssembly />} />
            <Route path="/bluereso" element={<BlueReso />} />
            <Route path="/isallo" element={<Isallo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
