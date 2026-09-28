import "./styles.css";

import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function PropertySearch() {
  return (
    <section className="property-search">

      <div className="search-container">

        <form className="search-form">

          <div className="field">
            <label>
              Finalidade
            </label>

            <select name="purpose">
              <option>Comprar</option>
              <option>Alugar</option>
            </select>
          </div>


          <div className="field">
            <label>
              Tipo de imóvel
            </label>

            <select name="type">
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Terreno</option>
              <option>Comercial</option>
            </select>
          </div>


          <div className="field">
            <label>
              <FaMapMarkerAlt />
              Localização
            </label>

            <input
              type="text"
              name="location"
              placeholder="Cidade ou bairro"
            />
          </div>


          <button 
            type="submit" 
            className="search-button"
          >
            <FaSearch />
            Encontrar imóvel
          </button>


        </form>

      </div>

    </section>
  );
}