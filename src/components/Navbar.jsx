import { useState } from "react";
import { Link } from "react-router-dom";
import { handleNavLinkClick } from "./navbarUtils";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    handleNavLinkClick(setMenuOpen);
  };

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
        <li>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/contactos" className="nav-link" onClick={handleLinkClick}>
            Contactos
          </Link>
        </li>
        <li>
          <Link to="/sobre" className="nav-link" onClick={handleLinkClick}>
            Sobre CASATIC
          </Link>
        </li>
        <li>
          <Link to="/directorio" className="nav-link" onClick={handleLinkClick}>
            Directorio
          </Link>
        </li>
        <li>
          <Link to="/solicitud" className="nav-link" onClick={handleLinkClick}>
            Solicitud de Socio
          </Link>
        </li>
        <li className="login">
          <i className="fas fa-user-circle"></i> Acceso Socios
        </li>
      </ul>

      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;