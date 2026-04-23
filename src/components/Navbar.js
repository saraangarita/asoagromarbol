import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import asoalogo from "../assets/asoalogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src={asoalogo} alt="Asoagromarbol logo" />
          <span>ASOAGROMARBOL</span>
        </a>

        {/* Menú */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Nosotros
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Galería
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>

        {/* Hamburguesa */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
