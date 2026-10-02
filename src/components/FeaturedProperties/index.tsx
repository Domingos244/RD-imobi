import { Link } from "react-router-dom";

import { properties } from "./data";

import "./styles.css";


export default function FeaturedProperties() {

  return (

    <section className="featured-properties">


      <div className="section-header">


        <div>

          <span>
            Imóveis selecionados
          </span>


          <h2>
            Imóveis em Destaque
          </h2>


          <p>
            Encontre propriedades exclusivas escolhidas para você.
          </p>


        </div>



        <Link to="/imoveis">

          Ver todos →

        </Link>



      </div>





      <div className="property-grid">


        {properties.map((property) => (


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



              <h3>

                {property.title}

              </h3>





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

              >

                Ver detalhes →

              </Link>





            </div>



          </article>



        ))}



      </div>



    </section>

  );

}