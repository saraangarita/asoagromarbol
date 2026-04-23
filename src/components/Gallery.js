import "../styles/Gallery.css";

import img1 from "../assets/galery1.jpg";
import img2 from "../assets/galery2.jpg";
import img3 from "../assets/galery3.jpg";
import img4 from "../assets/galery4.jpg";
import img5 from "../assets/galery5.jpg";
import img6 from "../assets/galery6.jpg";
import img7 from "../assets/galery7.jpg";
import img8 from "../assets/galery8.jpg";
import img9 from "../assets/galery9.jpg";
import img10 from "../assets/galery10.jpg";
import img11 from "../assets/galery11.jpg";
import img12 from "../assets/galery12.jpg";
function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <div>
            <h2>Galería de Vida</h2>
            <p>Momentos capturados en nuestras jornadas de campo.</p>
          </div>

          <a href="#gallery" className="gallery-link">
            Ver todas →
          </a>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt="Galería Asoagromarbol" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
