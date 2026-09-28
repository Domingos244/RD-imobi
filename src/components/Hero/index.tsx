import "./styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Encontre o <span>imóvel</span>
            <br />
            dos seus sonhos
          </h1>

          <p>
            Casas, apartamentos, terrenos e imóveis comerciais
            para compra e aluguel.
          </p>
        </div>
      </div>
    </section>
  );
}