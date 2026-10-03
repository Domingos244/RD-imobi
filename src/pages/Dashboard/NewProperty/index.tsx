import { useState } from "react";
import { useProperties } from "../../../context/useProperties";
import "./styles.css";


export default function NewProperty() {


  const { addProperty } = useProperties();


  const [coverImage, setCoverImage] = useState<string>("");

  const [galleryImages, setGalleryImages] = useState<string[]>([]);



  const [formData, setFormData] = useState({

    title: "",
    location: "",
    price: "",
    type: "Casa",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    area: "",
    description: "",
    features: ""

  });



  function handleCoverImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];

    if (!file) return;


    setCoverImage(
      URL.createObjectURL(file)
    );

  }




  function handleGalleryImages(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const files = event.target.files;

    if (!files) return;


    if (files.length > 10) {

      alert("Você pode adicionar no máximo 10 imagens.");

      return;

    }


    const images = Array.from(files).map(file =>
      URL.createObjectURL(file)
    );


    setGalleryImages(images);

  }





  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {

    setFormData({

      ...formData,

      [event.target.name]: event.target.value

    });

  }






  function handleSubmit(
    event: React.FormEvent
  ) {

    event.preventDefault();



    const newProperty = {


      id: Date.now(),


      title: formData.title,


      location: formData.location,


      price: formData.price,


      type: formData.type,


      bedrooms: Number(formData.bedrooms),


      bathrooms: Number(formData.bathrooms),


      garage: Number(formData.garage),


      area: formData.area,


      description: formData.description,



      features: formData.features
        .split(",")
        .map(feature => feature.trim()),



      image: coverImage,


      gallery: galleryImages

    };



    addProperty(newProperty);



    alert("Imóvel cadastrado com sucesso!");



    console.log(newProperty);



    setFormData({

      title: "",
      location: "",
      price: "",
      type: "Casa",
      bedrooms: "",
      bathrooms: "",
      garage: "",
      area: "",
      description: "",
      features: ""

    });


    setCoverImage("");

    setGalleryImages([]);

  }







  return (

    <main className="new-property-page">


      <div className="new-property-container">



        <div className="page-header">

          <span>
            Cadastro de imóvel
          </span>


          <h1>
            Novo imóvel
          </h1>


          <p>
            Preencha as informações do imóvel para cadastrar no sistema.
          </p>


        </div>





        <form
          className="property-form"
          onSubmit={handleSubmit}
        >





          <div className="form-group">

            <label>
              Imagem principal (capa)
            </label>


            <input

              type="file"

              accept="image/*"

              onChange={handleCoverImage}

            />

          </div>




          {coverImage && (

            <div className="image-preview cover">

              <img

                src={coverImage}

                alt="Imagem principal"

              />

            </div>

          )}






          <div className="form-group">

            <label>
              Galeria de imagens (até 10 fotos)
            </label>


            <input

              type="file"

              multiple

              accept="image/*"

              onChange={handleGalleryImages}

            />

          </div>





          <div className="image-preview">


            {galleryImages.map((image,index)=>(

              <img

                key={index}

                src={image}

                alt={`Galeria ${index + 1}`}

              />

            ))}


          </div>







          <div className="form-group">

            <label>
              Título do imóvel
            </label>


            <input

              name="title"

              value={formData.title}

              onChange={handleChange}

              placeholder="Ex: Casa moderna na Riviera"

            />

          </div>







          <div className="form-group">

            <label>
              Localização
            </label>


            <input

              name="location"

              value={formData.location}

              onChange={handleChange}

              placeholder="Cidade ou bairro"

            />

          </div>






          <div className="form-row">


            <div className="form-group">

              <label>
                Preço
              </label>


              <input

                name="price"

                value={formData.price}

                onChange={handleChange}

                placeholder="R$ 000.000"

              />

            </div>




            <div className="form-group">

              <label>
                Tipo
              </label>


              <select

                name="type"

                value={formData.type}

                onChange={handleChange}

              >

                <option>Casa</option>

                <option>Apartamento</option>

                <option>Terreno</option>


              </select>

            </div>


          </div>






          <div className="form-row">


            <div className="form-group">

              <label>
                Quartos
              </label>


              <input

                type="number"

                name="bedrooms"

                value={formData.bedrooms}

                onChange={handleChange}

              />

            </div>




            <div className="form-group">

              <label>
                Banheiros
              </label>


              <input

                type="number"

                name="bathrooms"

                value={formData.bathrooms}

                onChange={handleChange}

              />

            </div>




            <div className="form-group">

              <label>
                Vagas
              </label>


              <input

                type="number"

                name="garage"

                value={formData.garage}

                onChange={handleChange}

              />

            </div>


          </div>







          <div className="form-group">

            <label>
              Área do imóvel
            </label>


            <input

              name="area"

              value={formData.area}

              onChange={handleChange}

              placeholder="Ex: 320 m²"

            />

          </div>






          <div className="form-group">

            <label>
              Descrição
            </label>


            <textarea

              name="description"

              value={formData.description}

              onChange={handleChange}

              placeholder="Descreva o imóvel..."

            />

          </div>






          <div className="form-group">

            <label>
              Características
            </label>


            <input

              name="features"

              value={formData.features}

              onChange={handleChange}

              placeholder="Piscina, churrasqueira, jardim"

            />

          </div>







          <button type="submit">

            Salvar imóvel

          </button>



        </form>


      </div>


    </main>

  );

}