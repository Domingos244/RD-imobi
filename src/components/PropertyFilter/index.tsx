import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import "./styles.css";



export interface Filters {

  location: string;

  type: string;

  purpose: string;

}



interface PropertyFilterProps {


  filters: Filters;


  setFilters: Dispatch<SetStateAction<Filters>>;


}



export default function PropertyFilter({

  filters,

  setFilters

}: PropertyFilterProps) {



  function handleChange(

    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>

  ) {


    setFilters({

      ...filters,

      [event.target.name]: event.target.value

    });


  }




  return (


    <section className="property-filter">


      <form className="filter-form">



        <div className="filter-field">


          <label>

            <FaMapMarkerAlt />

            Localização

          </label>



          <input

            name="location"

            value={filters.location}

            onChange={handleChange}

            placeholder="Cidade ou bairro"

          />


        </div>






        <div className="filter-field">


          <label>

            Tipo

          </label>



          <select

            name="type"

            value={filters.type}

            onChange={handleChange}

          >


            <option value="">

              Todos

            </option>


            <option value="Casa">

              Casa

            </option>


            <option value="Apartamento">

              Apartamento

            </option>


            <option value="Terreno">

              Terreno

            </option>



          </select>


        </div>







        <div className="filter-field">


          <label>

            Finalidade

          </label>



          <select

            name="purpose"

            value={filters.purpose}

            onChange={handleChange}

          >


            <option value="">

              Todos

            </option>


            <option value="Comprar">

              Comprar

            </option>


            <option value="Alugar">

              Alugar

            </option>


          </select>



        </div>







        <button type="button">


          <FaSearch />


          Buscar


        </button>




      </form>



    </section>


  );

}