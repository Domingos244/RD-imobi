import "./styles.css";

export default function PropertySearch() {
  return (
    <section className="property-search">
      <div className="search-container">

        <h2>Encontre seu imóvel ideal</h2>

        <form className="search-form">

          <select>
            <option>Comprar</option>
            <option>Alugar</option>
          </select>

          <select>
            <option>Tipo de imóvel</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Comercial</option>
          </select>

          <input
            type="text"
            placeholder="Cidade ou bairro"
          />

          <button type="submit">
            Buscar
          </button>

        </form>

      </div>
    </section>
  );
}