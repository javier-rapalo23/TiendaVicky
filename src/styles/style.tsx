export const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    textAlign: "center",
    //backgroundColor: "#32c0c1",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
 
  buttons: {
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  hero: {
    backgroundColor: "#ffb6c1",
    padding: "40px",
    borderRadius: "10px",
    margin: "20px auto",
    //maxWidth: "800px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 10px",
  },
  brand: {
    color: "#ff1493",
  },
  subtitle: {
    fontSize: "1.2rem",
    margin: "10px 0 20px",
  },
  ctaButton: {
    backgroundColor: "#ff1493",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  features: {
    marginTop: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  featureCards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "200px",
    
  },
  featureCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)", // Efecto hover en tarjetas
  },
  cardImage: {
    width: "100%",
    borderRadius: "10px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  cardText: {
    fontSize: "1rem",
    color: "#666",
  },
  footer: {
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#999",
  },
  };


  export const navStyles: { [key: string]: React.CSSProperties } = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#32c0c1",
      padding: "10px 20px",
      color: "#2c3e50",
    },
    brand: {
      fontSize: "1.5rem",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "15px",
      margin: 0,
      padding: 0,
    },
    navItem: {},
    navLink: {
      textDecoration: "none",
      color: "#2c3e50",
      fontSize: "1rem",
    },
  };
  export const inventarioStyles: { [key: string]: React.CSSProperties } = {
    page: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      color: "#2c3e50",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.5rem",
      color: "#34495e",
      marginBottom: "10px",
    },
    form: {
      width: "100%",
      marginBottom: "30px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    input: {
      display: "block",
      margin: "10px 0",
      padding: "10px",
      width: "100%",
      maxWidth: "400px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    tableContainer: {
      marginTop: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "10px",
      backgroundColor: "#f2f2f2",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
    },
  };

  export const lovestyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#ffe4e1",
      fontFamily: "'Arial', sans-serif",
    },
    messageBox: {
      textAlign: "center" as "center",
      padding: "30px",
      borderRadius: "15px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#ff69b4",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#333",
    },
    heart: {
      fontSize: "4rem",
      color: "#ff1493",
      margin: "20px 0",
    },
  };