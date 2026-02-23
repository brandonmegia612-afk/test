import React from "react";

function Contactos() {
    return (
        <div className="contact-container">
            <div className="header">
                <h1>
                    <img src="logo.png" alt="Logo" className="logo" />
                    Contáctanos
                </h1>
                <p>Nos puedes contactar en nuestras diferentes redes sociales</p>
            </div>

            <div className="contact-list">
                <a
                    href="https://wa.me/5491234567890"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="whasap.png" alt="whatsapp" className="icon whatsapp" />
                    <div className="contact-info">
                        <div className="contact-name">WhatsApp</div>
                        <div className="contact-detail">+503 7777-7777</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                {/* Teléfono */}
                <a href="tel:+5491123456789" className="contact-item">
                    <img src="telefono.gif" alt="Teléfono" className="icon phone" />
                    <div className="contact-info">
                        <div className="contact-name">Teléfono</div>
                        <div className="contact-detail">+503 2222-2222</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                {/* Email (usar mailto) */}
                <a href="mailto:contacto@casatic.sv" className="contact-item">
                    <img src="correo.webp" alt="Email" className="icon email" />
                    <div className="contact-info">
                        <div className="contact-name">Email</div>
                        <div className="contact-detail">contacto@casatic.sv</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                <a
                    href="https://facebook.com/casatic"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="logo_de_facebook.png" alt="Facebook" className="icon facebook" />
                    <div className="contact-info">
                        <div className="contact-name">Facebook</div>
                        <div className="contact-detail">@casatic</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                <a
                    href="https://instagram.com/casatic.sv"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="instagram.png" alt="instagram" className="icon instagram" />
                    <div className="contact-info">
                        <div className="contact-name">Instagram</div>
                        <div className="contact-detail">@casatic.sv</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                <a
                    href="https://t.me/casatic"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="telegram.png" alt="Telegram" className="icon telegram" />
                    <div className="contact-info">
                        <div className="contact-name">Telegram</div>
                        <div className="contact-detail">@casatic</div>
                    </div>
                    <span className="arrow">→</span>
                </a>

                <a
                    href="https://twitter.com/casatic"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="X-Logo.jpg" alt="Twitter/X" className="icon twitter" />
                    <div className="contact-info">
                        <div className="contact-name">Twitter / X</div>
                        <div className="contact-detail">@casatic</div>
                    </div>
                    <span className="arrow">→</span>
                </a>
            </div>

            <a
                href="../Directorio Interactivo de Empresas Tecnológicas CASATIC 2026.html"
                className="btn-back"
            >
                Volver al Directorio Interactivo
                <img
                    src="https://images.emojiterra.com/google/android-12l/512px/1f448.png"
                    alt="Flecha izquierda"
                    style={{ width: 20, height: 20, marginLeft: 8 }}
                />
            </a>
        </div>
    );
}

export default Contactos;