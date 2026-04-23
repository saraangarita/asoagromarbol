import "../styles/About.css";
import aboutImg from "../assets/somoaso.jpg"; // usa una imagen real luego

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Texto */}
        <div className="about-text">
          <p className="about-subtitle">¿QUIÉNES SOMOS?</p>

          <h2 className="about-title">
            Fortaleciendo el trabajo en equipo y la tierra.
          </h2>

          <p className="about-description">
            ASOAGROMARBOL es una asociación sin fines de lucro dedicada a
            promover el crecimiento integral de los productores agropecuarios en
            Margarita, Bolívar.
          </p>

          <p className="about-description">
            Creemos firmemente en el poder de la comunidad. Nuestro objetivo es
            transformar la realidad agrícola local mediante procesos de
            capacitación, visibilización y sostenibilidad ambiental.
          </p>
        </div>

        {/* Imagen */}
        <div className="about-image">
          <img src={aboutImg} alt="Trabajo agrícola" />
        </div>
      </div>
    </section>
  );
}

export default About;
