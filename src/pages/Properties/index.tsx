import { properties } from "../../components/FeaturedProperties/data";
import PropertyFilter from "../../components/PropertyFilter";

import "./styles.css";


export default function Properties() {

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



      <PropertyFilter />



      <section className="properties-grid">


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


              <button>
                Ver detalhes
              </button>


            </div>


          </article>

        ))}


      </section>


    </main>

  );

}