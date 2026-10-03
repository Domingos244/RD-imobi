import { useState } from "react";
import { Link } from "react-router-dom";

import { useProperties } from "../../context/useProperties";import PropertyFilter from "../../components/PropertyFilter";

import "./styles.css";


export default function Properties() {


  const { properties } = useProperties();


  const [filters, setFilters] = useState({

    location: "",
    type: "",
    purpose: ""

  });



  const filteredProperties = properties.filter((property) => {


    const matchesLocation =
      property.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());



    const matchesType =
      filters.type === "" ||
      property.type === filters.type;



    const matchesPurpose =
      filters.purpose === "" ||
      property.purpose === filters.purpose ||
      property.type === filters.purpose;



    return (
      matchesLocation &&
      matchesType &&
      matchesPurpose
    );


  });



  return (


    <main className="properties-page">


      <section className="properties-header">


        <span>
          Encontre seu imóvel
        </span>


        <h1>
          Imóveis disponíveis
        </h1>


        <p>
          Encontre casas, apartamentos e terrenos selecionados para você.
        </p>


      </section>





      <PropertyFilter

        filters={filters}

        setFilters={setFilters}

      />







      <section className="properties-grid">


        {filteredProperties.length > 0 ? (


          filteredProperties.map((property) => (


            <article

              className="property-card"

              key={property.id}

            >


              <div className="property-image">


                <img

                  src={property.image}

                  alt={property.title}

                />



                <span>

                  {property.type}

                </span>


              </div>





              <div className="property-content">



                <h2>

                  {property.title}

                </h2>





                <p className="location">

                  📍 {property.location}

                </p>





                <div className="details">


                  <span>
                    🛏 {property.bedrooms}
                  </span>


                  <span>
                    🚿 {property.bathrooms}
                  </span>


                  <span>
                    🚗 {property.garage}
                  </span>


                  <span>
                    📐 {property.area}
                  </span>


                </div>





                <strong>

                  {property.price}

                </strong>





                <Link

                  to={`/imoveis/${property.id}`}

                  className="details-button"

                >

                  Ver detalhes →

                </Link>



              </div>


            </article>


          ))



        ) : (


          <p className="no-results">

            Nenhum imóvel encontrado.

          </p>


        )}



      </section>


    </main>

  );

}