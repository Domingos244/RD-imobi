import { useParams } from "react-router-dom";
import { useState } from "react";

import { properties } from "../../components/FeaturedProperties/data";

import "./styles.css";


export default function PropertyDetails() {

  const { id } = useParams();


  const property = properties.find(
    (item) => item.id === Number(id)
  );


  const images = property?.gallery?.length
    ? property.gallery
    : [property?.image || "/img/property-1.jpg"];


  const [selectedImage, setSelectedImage] = useState(images[0]);


  if (!property) {
    return (
      <main className="property-details">
        <h1>Imóvel não encontrado</h1>
      </main>
    );
  }


  return (

    <main className="property-details">


      <section className="gallery">


        <div className="main-image">

          <img
            src={selectedImage}
            alt={property.title}
          />

        </div>



        <div className="gallery-grid">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className={
                selectedImage === image
                  ? "active"
                  : ""
              }
              onClick={() => setSelectedImage(image)}
            />

          ))}

        </div>


      </section>





      <section className="property-info">


        <div className="property-header">

          <span>
            {property.type}
          </span>


          <h1>
            {property.title}
          </h1>


          <p className="location">
            📍 {property.location}
          </p>

        </div>





        <div className="property-details-grid">


          <div>
            🛏
            <strong>{property.bedrooms}</strong>
            Quartos
          </div>


          <div>
            🚿
            <strong>{property.bathrooms}</strong>
            Banheiros
          </div>


          <div>
            🚗
            <strong>{property.garage}</strong>
            Vagas
          </div>


          <div>
            📐
            <strong>{property.area}</strong>
            Área
          </div>


        </div>





        <div className="price">
          {property.price}
        </div>





        <section className="description">

          <h2>
            Descrição
          </h2>


          <p>
            {property.description}
          </p>


        </section>






        <section className="features">

          <h2>
            Características
          </h2>


          <div className="features-list">

            {property.features.map((feature) => (

              <span key={feature}>
                ✓ {feature}
              </span>

            ))}

          </div>


        </section>







        <section className="contact-card">


          <div className="agent-info">


            <div className="agent-avatar">
              R
            </div>


            <div>

              <h3>
                Ricardo Silva
              </h3>


              <p>
                Corretor de imóveis • CRECI 123456
              </p>

            </div>


          </div>





          <div className="contact-actions">

            <a
              href="#"
              className="whatsapp"
            >
              Conversar no WhatsApp
            </a>


            <button>
              Agendar visita
            </button>


          </div>


        </section>



      </section>


    </main>

  );

}