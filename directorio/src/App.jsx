import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contactos from "./Contactos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;