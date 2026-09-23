import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          RD<span>Imobiliária</span>
        </Link>

        <nav className="desktop-menu">
          <Link to="/">Página Inicial</Link>
          <Link to="/imoveis">Imóveis</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="actions desktop-menu">
          <Link to="/login" className="login">
            Entrar
          </Link>

          <Link to="/dashboard" className="button">
            Anunciar
          </Link>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          />

          <div className="mobile-menu">
            <button
              className="close-button"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Página Inicial
            </Link>

            <Link to="/imoveis" onClick={() => setMenuOpen(false)}>
              Imóveis
            </Link>

            <Link to="/sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>

            <Link to="/contato" onClick={() => setMenuOpen(false)}>
              Contato
            </Link>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Entrar
            </Link>

            <Link
              to="/dashboard"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Anunciar
            </Link>
          </div>
        </>
      )}
    </header>
  );
}