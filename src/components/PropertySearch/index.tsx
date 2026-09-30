import "./styles.css";

import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function PropertySearch() {
  return (
    <section className="property-search" aria-label="Busca de imóveis">

      <div className="search-container">

        <form
          className="search-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="field">

            <label htmlFor="location">
              <FaMapMarkerAlt />
              Localização
            </label>

            <input
              id="location"
              type="text"
              name="location"
              placeholder="Cidade"
            />

          </div>


          <div className="field">

            <label htmlFor="type">
              Tipo de imóvel
            </label>

            <select
              id="type"
              name="type"
              defaultValue=""
            >

              <option value="" disabled>
                Selecione
              </option>

              <option value="casa">
                Casa
              </option>

              <option value="apartamento">
                Apartamento
              </option>

              <option value="terreno">
                Terreno
              </option>

              <option value="comercial">
                Comercial
              </option>

            </select>

          </div>


          <div className="field">

            <label htmlFor="purpose">
              Finalidade
            </label>

            <select
              id="purpose"
              name="purpose"
              defaultValue="comprar"
            >

              <option value="comprar">
                Comprar
              </option>

              <option value="alugar">
                Alugar
              </option>

            </select>

          </div>


          <button
            type="submit"
            className="search-button"
          >

            <FaSearch />

            Buscar

          </button>


        </form>

      </div>

    </section>
  );
}