import { Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  return (
    <main className="dashboard">

      <div className="dashboard-container">

        <div className="dashboard-header">

          <div>
            <span>Painel Administrativo</span>

            <h1>Dashboard</h1>

            <p>
              Gerencie os imóveis cadastrados na RD Imobiliária.
            </p>
          </div>

          <Link
            to="/dashboard/imoveis/novo"
            className="new-property"
          >
            + Novo Imóvel
          </Link>

        </div>

        <section className="dashboard-stats">

          <div className="stat-card">
            <span>Total de imóveis</span>
            <strong>24</strong>
            <p>Imóveis cadastrados</p>
          </div>

          <div className="stat-card">
            <span>À venda</span>
            <strong>16</strong>
            <p>Disponíveis para compra</p>
          </div>

          <div className="stat-card">
            <span>Para alugar</span>
            <strong>8</strong>
            <p>Disponíveis para locação</p>
          </div>

          <div className="stat-card">
            <span>Corretores</span>
            <strong>3</strong>
            <p>Ativos no sistema</p>
          </div>

        </section>

      </div>

    </main>
  );
}