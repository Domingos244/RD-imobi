import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          RD<span>Imobiliária</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/imoveis">Imóveis</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="actions">
          <Link to="/login" className="login">
            Entrar
          </Link>

          <Link to="/dashboard" className="button">
            Anunciar
          </Link>
        </div>
      </div>
    </header>
  );
}