import React from "react";

import { lovestyles, styles } from "../styles/style";

const HomePage: React.FC = () => {
  return (
    <div style={styles.page}>
    <div style={styles.hero}>
      <h1 style={styles.title}>Bienvenidos a <span style={styles.brand}>Vicky & Javier</span></h1>
      <p style={styles.subtitle}>
        Encuentra los mejores productos para tu estilo de vida: maquillaje, cinnamons y mucho más.
      </p>
      <button style={styles.ctaButton}>Explorar Productos</button>
    </div>
    <div style={lovestyles.container}>
      <div style={lovestyles.messageBox}>
        <div style={lovestyles.heart}>❤️</div>
        <h1 style={lovestyles.title}>Vicky, te amo</h1>
        <p style={lovestyles.subtitle}>Sos mi persona favorita en el mundo. Besos mi amor :3</p>
      </div>
    </div>
    <div style={styles.features}>
      <h2 style={styles.sectionTitle}>¿Qué Ofrecemos?</h2>
      <div style={styles.featureCards}>
        <div style={styles.featureCard}>
          <img
            src="src\assets\lay-out-opened-beauty-case-with-cosmetics.jpg"
            alt="Maquillaje"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Maquillaje</h3>
          <p style={styles.cardText}>
            Productos de alta calidad para resaltar tu belleza.
          </p>
        </div>
        <div style={styles.featureCard}>
          <img
            src="src\assets\cinnamoroll-639307.webp"
            alt="Lámparas"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Cinnamorolls</h3>
          <p style={styles.cardText}>
            Ilumina tus espacios con nuestros Cinnamorolls únicos.
          </p>
        </div>
        <div style={styles.featureCard}>
          <img
            src="src\assets\model-career-kit-still-life.jpg"
            alt="Accesorios"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Accesorios</h3>
          <p style={styles.cardText}>
            Encuentra todo lo que necesitas para complementar tu estilo.
          </p>
        </div>
      </div>
    </div>

    <div style={styles.footer}>
      <p>© 2025 Vicky & Javier | Todos los derechos reservados</p>
    </div>
  </div>
   
  );
};


export default HomePage;
