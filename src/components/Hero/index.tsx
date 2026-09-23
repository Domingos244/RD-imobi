import "./styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">

        <div className="hero-content">

          <h1>
            Encontre o <span>imóvel</span><br />
            dos seus sonhos
          </h1>

          <p>
           Encontre casas, apartamentos e imóveis comerciais que combinam com o seu estilo de vida e seus objetivos.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explorar
            </button>

            <button className="btn-secondary">
              Anuncie aqui
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}