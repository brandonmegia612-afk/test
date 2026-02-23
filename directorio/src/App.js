import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Encuentra el Socio <br />
            Tecnológico Ideal
          </h1>

          <p>
            Conectamos empresas con los mejores proveedores de tecnología en El Salvador.
            Verificado. Confiable. Innovador.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;