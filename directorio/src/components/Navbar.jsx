import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.casatic.org/images/casatic-1.png"
          alt="CASATIC"
        />
        <span>CASATIC Directorio</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>Inicio</li>
        <li>Contactos</li>
        <li>Sobre CASATIC</li>
        <li>Directorio</li>
        <li>Solicitud de Socio</li>
        <li className="login">
          <i className="fas fa-user-circle"></i> Acceso Socios
        </li>
      </ul>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;