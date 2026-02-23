import React from "react";
import { Link } from "react-router-dom";

const SobreCasatic = () => {
  return (
    <>
      {/* Pico CSS CDN (si no lo tienes en index.html) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
      />

      

      <header role="banner" className="container">
        <nav>
          <ul>
            <li>
              <Link to="/" aria-label="Volver al directorio">
                ← Regresar al Directorio
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <strong style={{ color: "var(--primary)" }}>
                CASATIC
              </strong>{" "}
              — Cámara Salvadoreña de Tecnologías de Información y Comunicación
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container container-narrow">
            <h1>Sobre CASATIC</h1>
            <p className="lead">
              Impulsando el desarrollo del ecosistema tecnológico en El Salvador
              mediante colaboración, formación y promoción de buenas prácticas.
            </p>
          </div>
        </section>

        <section className="container container-narrow">
          <div className="card-highlight" style={{ marginTop: "1.25rem" }}>
            <h2>Misión</h2>
            <p>
              Promover y fortalecer la industria de tecnologías de información y
              comunicación, facilitando la colaboración entre empresas,
              gobierno y academia.
            </p>
          </div>

          <div className="card-highlight" style={{ marginTop: "1rem" }}>
            <h2>Visión</h2>
            <p>
              Ser la entidad referente en El Salvador para el desarrollo del
              sector TIC, reconocida por su capacidad para conectar talento y
              oportunidades.
            </p>
          </div>

          <section style={{ marginTop: "1.25rem" }}>
            <h3>Impacto</h3>
            <div className="stats" style={{ marginTop: ".75rem" }}>
              <div className="stat">
                <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                  150+
                </div>
                <div style={{ fontSize: ".9rem", color: "#556" }}>
                  Socios
                </div>
              </div>

              <div className="stat">
                <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                  25+
                </div>
                <div style={{ fontSize: ".9rem", color: "#556" }}>
                  Especialidades
                </div>
              </div>

              <div className="stat">
                <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                  1k+
                </div>
                <div style={{ fontSize: ".9rem", color: "#556" }}>
                  Proyectos apoyados
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginTop: "1.25rem", marginBottom: "2rem" }}>
            <h3>Afíliate</h3>
            <p>
              Si deseas que tu organización forme parte del Directorio
              Interactivo y de las actividades de CASATIC.
            </p>
            <p>
              <a href="/login" className="contrast">
                Acceso Socios / Afiliación
              </a>
            </p>
          </section>
        </section>
      </main>

      <footer role="contentinfo">
        <div className="container container-narrow">
          <p style={{ margin: 0 }}>
            <strong>CASATIC</strong> — Cámara Salvadoreña de Tecnologías de
            Información y Comunicación
          </p>
          <small>© 2026 CASATIC. Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  );
};

export default SobreCasatic;