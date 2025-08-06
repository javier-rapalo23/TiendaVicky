import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const navStyles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "72px",
    padding: "0 24px",
    background: "linear-gradient(90deg, #43c6ac 0%, #191654 100%)",
    boxShadow: "0 4px 16px rgba(67,198,172,0.10)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
  },
  logo: {
    width: "54px",
    height: "54px",
    borderRadius: 12,
    boxShadow: "0 2px 8px #19165422",
  },
  brand: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "1px",
    marginLeft: 12,
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "24px",
  },
  navItem: {},
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
    fontSize: "1.1rem",
    padding: "8px 18px",
    borderRadius: "6px",
    transition: "background 0.2s, color 0.2s",
  },
  navLinkHover: {
    background: "#43c6ac",
    color: "#191654",
  },
};

const Navbar: React.FC = () => {
  // Estado para hover en links
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <nav style={navStyles.nav as React.CSSProperties}>
      <img src={logo} alt="logo" style={navStyles.logo} />
      <span style={navStyles.brand}>Victoria's Shop</span>
      <ul style={navStyles.navList}>
        {[
          { to: "/", label: "Inicio" },
          { to: "/inventory", label: "Inventario" },
          { to: "/FacturacionScreen", label: "Facturación" },
        ].map((item) => (
          <li key={item.to} style={navStyles.navItem}>
            <Link
              to={item.to}
              style={{
                ...navStyles.navLink,
                ...(hovered === item.to ? navStyles.navLinkHover : {}),
              }}
              onMouseEnter={() => setHovered(item.to)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
