import React from "react";
import { lovestyles, styles } from "../styles/style";
import imgMaquillaje from "../assets/lay-out-opened-beauty-case-with-cosmetics.jpg";
import imgCinnamoroll from "../assets/cinnamoroll-639307.webp";
import imgAccesorios from "../assets/model-career-kit-still-life.jpg";

const cardImageStyle: React.CSSProperties = {
  width: "180px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "12px",
  boxShadow: "0 2px 8px rgba(67,198,172,0.10)",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const HomePage: React.FC = () => {
  return (
    <div style={{
      ...styles.page,
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      minHeight: "100vh",
    }}>
      <div style={{ ...styles.hero, animation: "fadeIn 1.2s" }}>
        <h1 style={{ ...styles.title, fontFamily: "'Segoe UI', Arial, sans-serif" }}>
          Bienvenidos a <span style={styles.brand}>Vicky & Javier</span>
        </h1>
        <p style={{ ...styles.subtitle, fontSize: "1.3rem" }}>
          Encuentra los mejores productos para tu estilo de vida: maquillaje, cinnamons y mucho más.
        </p>
        <button style={{ ...styles.ctaButton, boxShadow: "0 6px 24px #43c6ac55", fontSize: "1.2rem" }}>
          Explorar Productos
        </button>
      </div>

      <div style={lovestyles.container}>
        <div style={lovestyles.messageBox}>
          <div style={{ ...lovestyles.heart, animation: "heartbeat 1.5s infinite" }}>❤️</div>
          <h1 style={lovestyles.title}>Vicky, te amo</h1>
          <p style={lovestyles.subtitle}>Sos mi persona favorita en el mundo. Besos mi amor :3</p>
        </div>
      </div>

      <div style={{ ...styles.features, marginTop: 48 }}>
        <h2 style={{ ...styles.sectionTitle, fontFamily: "'Segoe UI', Arial, sans-serif" }}>¿Qué Ofrecemos?</h2>
        <div style={{ ...styles.featureCards, gap: "32px" }}>
          <div style={{ ...styles.featureCard, transition: "transform 0.2s", padding: 28 }}>
            <img
              src={imgMaquillaje}
              alt="Maquillaje"
              style={cardImageStyle}
            />
            <h3 style={{ ...styles.cardTitle, fontSize: "1.25rem" }}>Maquillaje</h3>
            <p style={styles.cardText}>
              Productos de alta calidad para resaltar tu belleza.
            </p>
          </div>
          <div style={{ ...styles.featureCard, transition: "transform 0.2s", padding: 28 }}>
            <img
              src={imgCinnamoroll}
              alt="Cinnamorolls"
              style={cardImageStyle}
            />
            <h3 style={{ ...styles.cardTitle, fontSize: "1.25rem" }}>Cinnamorolls</h3>
            <p style={styles.cardText}>
              Ilumina tus espacios con nuestros Cinnamorolls únicos.
            </p>
          </div>
          <div style={{ ...styles.featureCard, transition: "transform 0.2s", padding: 28 }}>
            <img
              src={imgAccesorios}
              alt="Accesorios"
              style={cardImageStyle}
            />
            <h3 style={{ ...styles.cardTitle, fontSize: "1.25rem" }}>Accesorios</h3>
            <p style={styles.cardText}>
              Encuentra todo lo que necesitas para complementar tu estilo.
            </p>
          </div>
        </div>
      </div>

      <div style={{ margin: "48px auto", maxWidth: 400, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #43c6ac22", padding: 24 }}>
        <h2 style={{ color: "#43c6ac", fontWeight: 700, fontSize: "1.5rem", marginBottom: 12 }}>¿Tienes dudas o quieres contactarnos?</h2>
        <p style={{ color: "#444", marginBottom: 16 }}>Escríbenos a <a href="mailto:vickyjavier@tienda.com" style={{ color: "#191654", textDecoration: "underline" }}>vickyjavier@tienda.com</a></p>
      </div>

      <div style={styles.footer}>
        <p>© 2025 Vicky & Javier | Todos los derechos reservados</p>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.2); }
          20% { transform: scale(0.95); }
          30% { transform: scale(1.1); }
          40% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};


export default HomePage;
