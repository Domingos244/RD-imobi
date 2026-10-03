import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./styles.css";


export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);


  const location = useLocation();


  const isHome = location.pathname === "/";



  function closeMenu() {

    setMenuOpen(false);

  }



  return (

    <header
      className={`navbar ${isHome ? "navbar-home" : "navbar-page"}`}
    >


      <div className="container">



        <Link
          to="/"
          className="logo"
        >

          RD<span>Imobiliária</span>

        </Link>





        <nav className="desktop-menu">


          <Link to="/">
            Página Inicial
          </Link>


          <Link to="/imoveis">
            Imóveis
          </Link>


          <Link to="/sobre">
            Sobre
          </Link>


          <Link to="/contato">
            Contato
          </Link>


        </nav>






        <div className="actions desktop-menu">


          <Link
            to="/login"
            className="login"
          >

            Entrar

          </Link>





          <Link
            to="/dashboard"
            className="button"
          >

            Anunciar

          </Link>


        </div>







        <button

          className="menu-button"

          onClick={() => setMenuOpen(true)}

          aria-label="Abrir menu"

        >

          <FaBars />

        </button>



      </div>







      <div

        className={`menu-overlay ${
          menuOpen ? "active" : ""
        }`}

        onClick={closeMenu}

      />








      <aside

        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}

      >




        <button

          className="close-button"

          onClick={closeMenu}

          aria-label="Fechar menu"

        >

          <FaTimes />

        </button>






        <Link
          to="/"
          onClick={closeMenu}
        >

          Página Inicial

        </Link>





        <Link
          to="/imoveis"
          onClick={closeMenu}
        >

          Imóveis

        </Link>





        <Link
          to="/sobre"
          onClick={closeMenu}
        >

          Sobre

        </Link>





        <Link
          to="/contato"
          onClick={closeMenu}
        >

          Contato

        </Link>





        <Link
          to="/login"
          onClick={closeMenu}
        >

          Entrar

        </Link>






        <Link

          to="/dashboard"

          className="button"

          onClick={closeMenu}

        >

          Anunciar

        </Link>





      </aside>



    </header>

  );

}