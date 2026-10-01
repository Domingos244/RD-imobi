import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import "./styles.css";


export default function PropertyFilter() {

  return (

    <section className="property-filter">


      <form 
        className="filter-form"
        onSubmit={(e) => e.preventDefault()}
      >


        <div className="filter-field">

          <label>
            <FaMapMarkerAlt />
            Localização
          </label>

          <input 
            type="text"
            placeholder="Cidade ou bairro"
          />

        </div>



        <div className="filter-field">

          <label>
            Tipo de imóvel
          </label>

          <select>

            <option>
              Todos
            </option>

            <option>
              Casa
            </option>

            <option>
              Apartamento
            </option>

            <option>
              Terreno
            </option>

          </select>

        </div>



        <div className="filter-field">

          <label>
            Finalidade
          </label>

          <select>

            <option>
              Comprar
            </option>

            <option>
              Alugar
            </option>

          </select>

        </div>



        <div className="filter-field">

          <label>
            Preço máximo
          </label>

          <select>

            <option>
              Qualquer valor
            </option>

            <option>
              Até R$ 500 mil
            </option>

            <option>
              Até R$ 1 milhão
            </option>

            <option>
              Acima de R$ 1 milhão
            </option>

          </select>

        </div>



        <button>

          <FaSearch />

          Buscar

        </button>


      </form>


    </section>

  );

}