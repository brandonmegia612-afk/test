import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from "./components/Navbar";
import SobreCasatic from "./components/SobreCasaTIC";
import Contactos from "./components/Contactos";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Encuentra el Socio <br />
            Tecnológico Ideal
          </h1>

          <p>
            Conectamos empresas con los mejores proveedores de tecnología en El Salvador.
            Verificado. Confiable. Innovador.
          </p>
        </div>
      </section>
      
    </>
  );
}

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreCasatic />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
  );
}

export default App;