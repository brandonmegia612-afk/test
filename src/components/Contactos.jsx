import React from "react";
import { Link } from "react-router-dom";

const Contactos = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
      />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, blue 0%, #0b80ee 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .contact-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          padding: 40px 30px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          padding: 18px 20px;
          background: #f8f9fa;
          border-radius: 12px;
          text-decoration: none;
          color: #333;
          transition: 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(10px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin-right: 15px;
        }

        .btn-back {
          display: inline-block;
          margin-top: 30px;
          padding: 12px 24px;
          background: #0066cc;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          text-align: center;
          width: 100%;
        }
      `}</style>

      <div className="contact-container">
        <div className="header">
          <h1>Contáctanos</h1>
          <p>Nos puedes contactar en nuestras redes sociales</p>
        </div>

        <div className="contact-list">

          <a
            href="https://wa.me/50377777777"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="whasap.png" alt="WhatsApp" className="icon" />
            <div>
              <strong>WhatsApp</strong>
              <div>+503 7777-7777</div>
            </div>
          </a>

          <a href="tel:+50322222222" className="contact-item">
            <img src="telefono.gif" alt="Teléfono" className="icon" />
            <div>
              <strong>Teléfono</strong>
              <div>+503 2222-2222</div>
            </div>
          </a>

          <a
            href="mailto:info@casatic.sv"
            className="contact-item"
          >
            <img src="correo.webp" alt="Email" className="icon" />
            <div>
              <strong>Email</strong>
              <div>info@casatic.sv</div>
            </div>
          </a>

        </div>

       <Link to="/" className="btn-back">Volver al Directorio</Link>
      </div>
    </>
  );
};

export default Contactos;