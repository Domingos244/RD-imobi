import Hero from "../../components/Hero";
import PropertySearch from "../../components/PropertySearch";
import FeaturedProperties from "../../components/FeaturedProperties";

import "./styles.css";

export default function Home() {
  return (
    <main className="home">

      <section className="hero-wrapper">

        <Hero />

        <PropertySearch />

      </section>

      <FeaturedProperties/>

    </main>
  );
} 