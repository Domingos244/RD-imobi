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

        <h1>
          Imóvel não encontrado
        </h1>

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


      {/* resto do seu código continua igual */}

    </main>

  );

}