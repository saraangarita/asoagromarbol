import "../styles/Hero.css";
import fondo from "../assets/fondo.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Fondo */}
      <div className="hero-bg">
        <img src={fondo} alt="Postal Asoagromarbol" />
        <div className="hero-overlay"></div>
      </div>

      {/* Contenido */}
      <div className="hero-content">
        <p className="hero-location hero-el">Margarita, Bolívar • Colombia</p>

        <h1 className="hero-title hero-el">ASOAGROMARBOL</h1>

        <p className="hero-description hero-el">
          Asociación de Productores Agropecuarios de Margarita Bolivar
        </p>

        <div className="hero-buttons hero-el">
          <a href="#about" className="btn-primary">
            Conoce más →
          </a>
        </div>
      </div>

      {/* Scroll indicator PRO */}
      <div className="hero-scroll">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
