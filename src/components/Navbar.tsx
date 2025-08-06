import React from "react";
import { Link } from "react-router-dom";
import { navStyles} from "../styles/style";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav style={navStyles.nav}>
      <img src={logo} alt="logo" style={{width: "50px", height: "50px", borderRadius: 10}} />
      <h1 style={navStyles.brand}>Victoria's Shop</h1>
      <ul style={navStyles.navList}>
        <li style={navStyles.navItem}>
          <Link to="/" style={navStyles.navLink}>
            Inicio
          </Link>
        </li>
        <li style={navStyles.navItem}>
          <Link to="/inventory" style={navStyles.navLink}>
            Inventario
          </Link>
        </li>
        <li style={navStyles.navItem}>
          <Link to="/billing" style={navStyles.navLink}>
            Facturación
          </Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
