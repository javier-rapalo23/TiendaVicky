import React from "react";

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
  rowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
    padding: "32px 16px",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    textAlign: "center",
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
  
  },
  cardImage: {
    width: "180px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(67,198,172,0.10)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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

export const lovestyles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffe4e1",
    fontFamily: "'Arial', sans-serif",
  },
  messageBox: {
    textAlign: "center",
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