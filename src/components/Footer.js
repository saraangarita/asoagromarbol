import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-container">
          {/* Texto principal */}
          <div className="footer-top">
            <h2>Conectemos.</h2>
            <p>
              Si eres productor, socio potencial o simplemente quieres saber más
              sobre nuestro trabajo, estamos listos para escucharte.
            </p>
          </div>

          {/* Info */}
          <div className="footer-info">
            <div className="footer-item">
              <h4>Ubicación</h4>
              <p>Margarita, Bolívar, Colombia</p>
            </div>

            <div className="footer-item">
              <h4>Teléfono</h4>
              <p>+57 301 3458690</p>
            </div>

            <div className="footer-item">
              <h4>Correo Electrónico</h4>
              <p>diegocantymez@gmail.com</p>
            </div>

            <div className="footer-item">
              <h4>Redes</h4>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Facebook →
              </a>
            </div>
          </div>

          {/* Copy */}
          <div className="footer-bottom">
            © 2026 ASOAGROMARBOL. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp flotante */}
      <a
        href="https://wa.me/573013458690"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </>
  );
}

export default Footer;
